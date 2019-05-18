const express = require("express");
const router = express.Router();
const profile = require("../../models/profile");

router.post("/profile", (req, res) => {
  console.log("routes/profile.js req: ");
  console.log(req.body);
})

router.route("/profile")
  .get(profile.findAll)
  .post(profile.create);

module.exports = {
//do we need find by username right?
//findById: function(req, res) {
//   db.Book
//     .findById(req.params.id)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
create: function(req, res) {
  db.profile
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
update: function(req, res) {
  db.profile
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
}
};