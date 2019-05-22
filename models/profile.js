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
  // unique: true,
  match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  ref: "profileEmail"
 },

phone: {
  type: String,
  validate: {
    validator: function(v) {
      return /\d{3}-\d{3}-\d{4}/.test(v);
    },
    message: props => `${props.value} please enter a valid number in xxx-xxx-xxxx format`
  },
  ref: "profilePhone"
},

inputCity: {
  type: String,
  trim: true,
  ref: "profileCity"
},

inputState: {
  type: String,
  trim: true,
  ref: "profileState"
},

inputZip: {
  type: String,
  trim: true,
  ref: "profileZip"
},
time: {
  type: String,
  trim: true,
  ref: "profileTime"

},

interests1: {
  type: String,
  trim: true,
  ref: "interests1"
},
interests2: {
  type: String,
  trim: true,
  ref: "interests2"
},
interests3: {
  type: String,
  trim: true,
  ref: "interests3"
},
skills1: {
  type: String,
  trim: true,
  ref: "skills1"
},
skills2: {
  type: String,
  trim: true,
  ref: "skills2"
},
skills3: {
  type: String,
  trim: true,
  ref: "skills3"
},

date: {
  type: Date,
  default: Date.now
},
  
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;