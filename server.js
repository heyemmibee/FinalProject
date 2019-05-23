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
  app.use(express.static("client"));
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
let connectedClients = [];
socketIo.on("connection", socket => {
  const username = socket.handshake.query.username;
  console.log(`${Date().toString()} :: ${username} CONNECTED`);

  socket.nickname = username;
  socket.join("General");
  console.log(`${Date().toString()} :: ${username} Joined General`);

  // Broadcast a list of connected clients.
  connectedClients.push(username);
  console.log(connectedClients);
  socketIo.to("General").emit("connected clients",connectedClients);


  socket.on("client:message", data => {
    console.log(`${Date().toString()} :: ${data.username}: ${data.message}`);

    // message received from client, now broadcast it to everyone else
    socket.to("General").emit("server:message", data);
  });

  socket.on("disconnect", () => {
    console.log(`${Date().toString()} :: ${username} DISCONNECTED`);

    // Remove user.
    connectedClients.splice(connectedClients.indexOf(username), 1);
    console.log(connectedClients);
    // Broadcast a list of connected clients
    socketIo.to("General").emit("connected clients",connectedClients);
  });
});


