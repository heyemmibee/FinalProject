const mongoose = require("mongoose");
const profile = require("../models/profile");
const events = require("../models/events");

// This file empties the collection and inserts predefined values.

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/underdogdb");

//Event Seed categories for reference: Cooking & Baking, Community Cleanups, Teaching & Training, Gardening & Landscaping
// Events & Advertising, Environment & Wildlife, Mental Health & Fitness, Harvest & Farming, Home Improvement & DIY

const eventsSeed = [
  {
    title: "Sir Helps-A-Bot",
    location: "950 N Glebe Rd Arlington, VA 22203",
    description:
      "Discuss the key skills for full-stack web development or data analytics and how it relates to droid rescue.",
    category: ["Teaching & Training"],
    skills: ["Event Planning","Administration"],
    start: "2019-05-21T7:15:00"
  },
  {
    title: "iRobot Showing",
    location: "1600 Pennsylvania Ave NW, Washington, DC 20500",
    description: "Looking for volunteers to help restore a community space!",
    category: ["Home Improvement & DIY"],
    skills: ["Transportation & Driving","Administration"],
    start: "2019-05-05T16:00:00"
  },
  {
    title: "Droid Drop Off",
    location: "1722 7th St NW, Washington, DC 20001",
    description:
      "Community Dropoff! We make sure your droid goes to a loving new home.",
    category: ["Events & Advertising"],
    skills: ["Event Planning","Administration"],
    start: "2019-05-17T08:00:00"
  },
  {
    title: "Droid Rights March",
    location: "National Mall, Washington, DC 20001",
    description:
      "Protest march.  Ensure that old and obsolete droids are not cannibalized for parts.",
    category: ["Events & Advertising"],
    skills: ["Event Planning","Administration","Transportation & Driving"],
    start: "2019-05-24T13:45:00"
  },
  {
    title: "Droid Reunion",
    location: "Lake Fairfax Park, Lake Fairfax Drive, Reston, VA",
    description:
      "Bring your adopted droids for a reunion with their old friends.  Creakers and leakers are welcome.",
    category: ["Events & Advertising"],
    skills: ["Event Planning","Finance & Bookkeeping","Heavy Lifting"],
    start: "2019-05-13T07:30:00"
  },
  {
    title: "Droid Care Workshop",
    location: "1961 Chain Bridge Rd, McLean, VA 22102",
    description:
      "Learn how to care for your droid at the Tyson's Corner Apple Store workshop.",
    category: ["Teaching & Training"],
    skills: ["Event Planning","Teaching & Childcare"],
    start: "2019-05-30T05:30:00"
  },
  {
    title: "Smith Family Home Inspection",
    location: "Charter Oak Apartments, Charter Oak Court, Reston, VA",
    description:
      "Home inspection for potential droid adopters.",
    category: ["Teaching & Training"],
    skills: ["Administration","Teaching & Childcare"],
    start: "2019-05-19T12:30:00"
  },
  {
    title: "Jones Family Home Inspection",
    location: "2105 N Glebe Rd, Arlington, VA 22207",
    description:
      "Home inspection for potential droid adopters.",
    category: ["Teaching & Training"],
    skills: ["Administration","Teaching & Childcare"],
    date: "2019-05-17T10:15:00"
  },
  {
    title: "Droid Care Workshop",
    location: "1961 Chain Bridge Rd, McLean, VA 22102",
    description:
      "Learn how to care for your droid at the Tyson's Corner Apple Store workshop.",
    category: ["Teaching & Training"],
    skills: ["Event Planning","Teaching & Childcare"],
    start: "2019-05-01T05:30:00"
  },
  {
    title: "Droid Spare Part Sale",
    location: "1722 7th St NW, Washington, DC 20001",
    description:
      "Learn how to care for your droid at the Tyson's Corner Apple Store workshop.",
    category: ["Teaching & Training"],
    skills: ["Event Planning","Teaching & Childcare"],
    start: "2019-05-07T019:30:00"
  },
  {
    title: "Star Wars Games",
    location: "Lake Fairfax Park, Lake Fairfax Drive, Reston, VA",
    description:
      "Exactly what it sounds like, pick your team and saber. Winner get's to give a droid a new home.",
    category: ["Events & Advertising"],
    skills: ["Event Planning","Finance & Bookkeeping","Heavy Lifting"],
    start: "2019-05-15T07:30:00"
  },
  {
    title: "Hack-a-Droid",
    location: "Lake Fairfax Park, Lake Fairfax Drive, Reston, VA",
    description:
      "We challenge you to build a droid, with our homebrewed software, in a week.",
    category: ["Events & Advertising"],
    skills: ["Event Planning","Finance & Bookkeeping","Heavy Lifting"],
    start: "2019-05-21T07:30:00"
  },
];

events
  .remove({})
  .then(() => events.collection.insertMany(eventsSeed))
  .then(data => {
    console.log(data.result.n + " events inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

