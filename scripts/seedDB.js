const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collection and inserts predefined values.

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/helphubdb"
);

const eventSeed = [
  {
    title: "Initiation",
    npo: "EcoEmily",
    eventType: "",
    eventActivity: "", 
    eventDate: "",
    eventTime: "",
    eventDescription: "",
  },
  {
    title: "",
    npo: "",
    eventType: "", 
    eventActivity: "", 
    eventDate: "",
    eventTime: "",
    eventDescription: "",
  },
  {
    title: "",
    npo: "",
    eventType: "", 
    eventActivity: "", 
    eventDate: "",
    eventTime: "",
    eventDescription: "",
  }
],

const eventSeed = [
  {
    title: "Initiation",
    npo: "EcoEmily",
    eventType: "",
    eventActivity: "", 
    eventDate: "",
    eventTime: "",
    eventDescription: "",
  }
]