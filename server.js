const express = require("express");
const app = express();
const server = require("http").Server(app);
const socketIo = require("socket.io")(server);
const routes = require("./routes");

//const mongoose = require("mongoose");
const mongo = require("mongodb").MongoClient;

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

server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

mongo.connect(process.env.MONGODB_URI || "mongodb://localhost", function(
  err,
  dbclient
) {
  if (err) {
    throw err;
  }

  let db = dbclient.db("chatterboxdb");

  console.log("Mongo connected ...");

  console.log("Wait on client to connect.");

  // Setup socket.io
  socketIo.on("connection", socket => {
    const username = socket.handshake.query.username;
    console.log(`${Date().toString()} :: ${username} CONNECTED`);

    socket.on("client:message", data => {
      console.log(`${Date().toString()} :: ${data.username}: ${data.message}`);

      // message received from client, now broadcast it to everyone else
      socket.broadcast.emit("server:message", data);
    });

    socket.on("disconnect", () => {
      console.log(`${Date().toString()} :: ${username} DISCONNECTED`);
    });
  });

  console.log("Done waiting on client.");
});
