const express = require("express");
const bodyParser = require("body-parser")
const morgan = require("morgan")
const session = require("express-session")

const mongoose = require("mongoose");
const routes = require("./routes");
// Route requires
const user = require('./routes/user');
const passport = require("./passport");
const app = express();
const server = require("http").Server(app);
const socketIo = require("socket.io")(server);

const PORT = process.env.PORT || 3001;

// Define middleware here
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
// TODO : What is the difference between this parser and the
// express parser and json?
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		resave: false, //required
		saveUninitialized: false //required
	})
);

// Passport
app.use(passport.initialize());
app.use(passport.session()) // calls the deserializeUser;

// Add routes, both API and view
// DO THIS AFTER INITIALIZING PASSPORT!!
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/underdogdb");

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
    // TODO : Tell everyone else in the room that user has disconnected.
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
