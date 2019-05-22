const express = require("express");
const router = express.Router();
const profile = require("../../models/profile");
const db = require("../../models");
const mongoose = require("mongoose");

// import profile from "../profile"

router.post("/profile/:id", (req,res) => {
  console.log(req.params.id);
  db.Profile.findOneAndUpdate({_id: req.params.id}, req.body)
  .then(function(dbProfile){
    console.log(dbProfile);
    res.json(dbProfile)
  })
  .catch( function(err){
    console.log(err);
  })
})

router.get("/profile/:id", (req,res) => {
  console.log(req.params.id);
  db.User.findOne({_id: req.params.id})
  .populate ("profile").then(function(dbProfile){
    console.log(dbProfile);
    res.json(dbProfile)
  })
  .catch( function(err){
    console.log(err);
  })
})
// router.route("/profile")
//   .get(profile.findAll)
//   .post(profile.create);

// module.exports = {
//do we need find by username right?
//findById: function(req, res) {
//   db.Book
//     .findById(req.params.id)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// create: function(req, res) {
//   db.profile
//     .create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// update: function(req, res) {
//   db.profile
//     .findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// }
// };
module.exports = router;
