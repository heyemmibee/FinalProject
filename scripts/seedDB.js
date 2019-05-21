const mongoose = require("mongoose");
const profile = require("../models/profile");
const events = require("../models/events");

// This file empties the collection and inserts predefined values.

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/underdogdb");

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
  }
];

profile
  .remove({})
  .then(() => profile.collection.insertMany(profileSeed))
  .then(data => {
    console.log(data.result.n + " profiles inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

//Event Seed categories for reference: Cooking & Baking, Community Cleanups, Teaching & Training, Gardening & Landscaping
// Events & Advertising, Environment & Wildlife, Mental Health & Fitness, Harvest & Farming, Home Improvement & DIY

const eventsSeed = [
  {
    creator: "Sir Helps-A-Lot",
    title: "Round Table Talk",
    location: "950 N Glebe Rd Arlington, VA 22203",
    description:
      "Discuss the key skills for full-stack web development or data analytics.",
    category: ["Teaching & Training"],
    skills: ["Event Planning","Administration"],
    date: "05-20-2019T09:00-10:30"
  },
  {
    creator: "EcoEmily",
    title: "Glass Pickup",
    location: "1300 Lee Hwy, Arlington, VA 22209",
    description:
      "We are collecting glass since our state won't anymore! Please don't pick up broken glass.",
    category: ["Community Cleanups"],
    skills: ["Event Planning","Heavy Lifting"],
    date: "05-22-2019T010:00-14:30"
  },
  {
    creator: "Save our Trees",
    title: "Park Restoration",
    location: "1600 Pennsylvania Ave NW, Washington, DC 20500",
    description: "Looking for volunteers to help restore a community space!",
    category: ["Home Improvement & DIY"],
    skills: ["Transportation & Driving","Administration"],
    date: "05-25-2019T012:00-19:30"
  },
  {
    creator: "Droid Rescue",
    title: "Droid Drop Off",
    location: "1722 7th St NW, Washington, DC 20001",
    description:
      "Community Dropoff! We make sure your droid goes to a loving new home.",
    category: ["Events & Advertising"],
    skills: ["Event Planning","Administration"],
    date: "05-24-2019T011:00-16:30"
  },
  {
    creator: "Droid Rescue",
    title: "Droid Rights March",
    location: "National Mall, Washington, DC 20001",
    description:
      "Protest march.  Ensure that old and obsolete droids are not cannibalized for parts.",
    category: ["Events & Advertising"],
    skills: ["Event Planning","Administration","Transportation & Driving"],
    date: "06-08-2019T010:00-16:00"
  },
  {
    creator: "Droid Rescue",
    title: "Droid Reunion",
    location: "Lake Fairfax Park, Lake Fairfax Drive, Reston, VA",
    description:
      "Bring your adopted droids for a reunion with their old friends.  Creakers and leakers are welcome.",
    category: ["Events & Advertising"],
    skills: ["Event Planning","Finance & Bookkeeping","Heavy Lifting"],
    date: "06-22-2019T008:00-16:00"
  },
  {
    creator: "Droid Rescue",
    title: "Droid Care Workshop",
    location: "1961 Chain Bridge Rd, McLean, VA 22102",
    description:
      "Learn how to care for your droid at the Tyson's Corner Apple Store workshop.",
    category: ["Teaching & Training"],
    skills: ["Event Planning","Teaching & Childcare"],
    date: "06-23-2019T010:00-12:00"
  },
  {
    creator: "Droid Rescue",
    title: "Smith Family Home Inspection",
    location: "Charter Oak Apartments, Charter Oak Court, Reston, VA",
    description:
      "Home inspection for potential droid adopters.",
    category: ["Teaching & Training"],
    skills: ["Administration","Teaching & Childcare"],
    date: "06-11-2019T010:00-10:30"
  },
  {
    creator: "Droid Rescue",
    title: "Jones Family Home Inspection",
    location: "2105 N Glebe Rd, Arlington, VA 22207",
    description:
      "Home inspection for potential droid adopters.",
    category: ["Teaching & Training"],
    skills: ["Administration","Teaching & Childcare"],
    date: "06-29-2019T014:00-14:30"
  }
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

