const express = require("express");
const app = express();
const server = require("http").Server(app);
const socketIo = require("socket.io")(server);
const routes = require("./routes");

//const mongoose = require("mongoose");
//const mongo = require("mongodb").MongoClient;

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

console.log("Listen for socket connection ...");

// Setup socket.io
socketIo.on("connection", socket => {
  const username = socket.handshake.query.username;
  console.log(`${Date().toString()} :: ${username} CONNECTED`);

  socket.nickname = username;
  socket.join("General");
  console.log(`${Date().toString()} :: ${username} Joined General`);

  // Display chatroom roster.
  // socketIo
  //   .of("/")
  //   .in("General")
  //   .clients(function(error, clients) {
  //     let numClients = clients.length;
  //     console.log("Num Clients : " + numClients);
  //     clients.forEach(function(client) {
  //       console.log("Username: " + JSON.stringify(client));
  //     });
  //   });
    displayClients(socketIo);

  socket.on("client:message", data => {
    console.log(`${Date().toString()} :: ${data.username}: ${data.message}`);

    displayClients(socketIo);
    
    // message received from client, now broadcast it to everyone else
    socket.to("General").emit("server:message", data);
  });

  socket.on("disconnect", () => {
    console.log(`${Date().toString()} :: ${username} DISCONNECTED`);
  });
});

displayClients = socketIo => {
  socketIo
    .of("/")
    .in("General")
    .clients(function(error, clients) {
      let numClients = clients.length;
      console.log("Num Clients : " + numClients);
      clients.forEach(function(client) {
        console.log("Username: " + JSON.stringify(client));
      });
    });
};
