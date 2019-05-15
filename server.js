const express = require("express");
const app = express();
const server = require('http').Server(app);
const client = require('socket.io')(server);
const routes = require("./routes");

//const mongoose = require("mongoose");
const mongo = require('mongodb').MongoClient;


const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/underdogdb");

// Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });

server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

mongo.connect(
  process.env.MONGODB_URI || "mongodb://localhost",
  function(err, dbclient) {
      if (err) {
          throw err;
      }

      let db = dbclient.db('chatterboxdb');

      console.log("Mongo connected ...");

      console.log("Wait on client to connect.");

      // Connect to socket.io
      client.on('connection', function(socket) {

          console.log("Client connected in");

          let chat = db.collection('chats');

          // Create function to send status
          sendStatus = function(s) {
              socket.emit('status', s);
          }

          // Get chats from mongo collection
          chat.find().limit(100).sort({_id:1}).toArray(function(err, res) {
              if (err) {
                  throw err;
              }

              console.log("Server Tx output");

              // Emit the messages.
              socket.emit('output', res);
          });

          // Handle input events
          socket.on('input', function(data) {

              console.log("Server Rx input");

              let name = data.name;
              let message = data.message;

              // Check for name and message
              if (name == '' || message == '') {
                  // Send error status
                  sendStatus('Please enter a name and message');
              } else {
                  // Insert message
                  chat.insertOne({name: name, message: message}, function() {
                      client.emit('output', [data]);

                      // Send status object
                      sendStatus({
                          message: 'Message sent',
                          clear: true
                      });
                  });
              };
          });

          // Handle clear
          socket.on('clear', function(data) {
              // Remove all chats from collection
              chat.remove({}, function() {
                  // Emit cleared
                  socket.emit('cleared');
              });
          });

          // Handle disconnection.
          socket.on('disconnect', function() {
              console.log('Client disconnected');
          });
      });

      console.log("Done waiting on client.");
  }
);
