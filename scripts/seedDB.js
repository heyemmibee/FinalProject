const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collection and inserts predefined values.

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/underdogdb"
);
