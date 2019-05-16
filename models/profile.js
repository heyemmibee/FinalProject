var mongoose = require("mongoose");

// Ref Mongoose Schema Constructor//
var Schema = mongoose.Schema;
var ProfileSchema = new Schema({

//documents//
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
  required: [true, 'User phone number required'],
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
  type: String,
  trim: true,
  ref: "profileZip"
},

date: {
  type: Date,
  default: Date.now
},
  
});

var profileData = mongoose.model("Profile", ProfileSchema);

module.exports = profileData;
