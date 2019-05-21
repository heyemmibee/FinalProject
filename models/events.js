const mongoose = require("mongoose");
mongoose.promise = Promise

// Ref Mongoose Schema Constructor//
const Schema = mongoose.Schema;
const eventsSchema = new Schema({

    //userid from login? Help
    creator: { 
        //type: Schema.ObjectId, 
        //ref: 'User'
        type: String
    },
    title: { 
        type: String, 
        index:true 
    },
    location: { 
        type: String, 
        index:true 
    },
    description: {
        type: String,
        maxlength: 300
    },
    category: [{ 
        //type: Schema.ObjectId, 
        //ref: 'category'
        type: String
    }],
    skills: [{ 
        //type: Schema.ObjectId, 
        //ref: 'category'
        type: String
    }],
    date: { 
        type: String
    },
    created: { 
        type: Date, 
        default: Date.now,
        timestamp: true
    },
  });

const Events = mongoose.model("Events", eventsSchema)
module.exports = Events;