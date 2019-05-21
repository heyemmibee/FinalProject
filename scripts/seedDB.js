const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collection and inserts predefined values.

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/helphubdb"
);

const profileSeed = [
  {
    name: "Sir Helps-A-Lot",
    email: "helpsalot@yahoo.com",
    phone: "123-456-7890",
    city: "Arlington",
    state: "VA",
    zip: "22201",
    date: new Date(Date.now())
  },
  {
    name: "Madams Organ",
    email: "admo@gmail.com",
    phone: "321-654-0987",
    city: "Washington",
    state: "DC",
    zip: "20001",
    date: new Date(Date.now())
  },
  {
    name: "Honor Grace",
    email: "angel@aol.com",
    phone: "000-000-0000",
    city: "Silver Spring",
    state: "MD",
    zip: "70345",
    date: new Date(Date.now())
  },
];

db.profile
  .remove({})
  .then(() => db.profile.collection.insertMany(profileSeed))
  .then(data => {
    console.log(data.result.n + "profiles inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
