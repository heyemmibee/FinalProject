const router = require("express").Router();
const profileController = require("../../controllers/profileController");

router.route("/profile")
  .get(profileController.findAll)
  .post(booksController.create);

router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;