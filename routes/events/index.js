const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/events/"
router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

// Matches with "/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

module.exports = router;
