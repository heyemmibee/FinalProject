const mongoose = require("mongoose");
mongoose.promise = Promise

// Ref Mongoose Schema Constructor//
const Schema = mongoose.Schema;
const profileSchema = new Schema({

name: {
  type: String,
  trim: true,
  ref: "profileName"
},

email: {
  type: String,
  unique: true,
  match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  ref: "profileEmail"
 },

phone: {
  type: Number,
  validate: {
    validator: function(v) {
      return /\d{3}-\d{3}-\d{4}/.test(v);
    },
    message: props => `${props.value} please enter a valid number in xxx-xxx-xxxx format`
  },
  ref: "profilePhone"
},

city: {
  type: String,
  trim: true,
  ref: "profileCity"
},

state: {
  type: String,
  trim: true,
  ref: "profileState"
},

zip: {
  type: Number,
  trim: true,
  ref: "profileZip"
},

date: {
  type: Date,
  default: Date.now
},
  
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;