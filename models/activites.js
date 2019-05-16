var mongoose = require("mongoose");

// Ref Mongoose Schema Constructor//
var Schema = mongoose.Schema;
var ActivitiesSchema = new Schema({

    date: {
        type: Date,
        default: Date.now
      },
        
      });
      
      var Example = mongoose.model("Activities", ProfileSchema);
      
      module.exports = Example;