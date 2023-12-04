const express = require("express")
const EventController = require("../controllers/EventController")
const RequireAuth = require("../middleware/RequireAuth")

const event = express.Router()

event
  .route("/event/create")
  .post(RequireAuth, EventController.create)

event
  .route("/event/:id")
  .get(EventController.get)
  .put(RequireAuth, EventController.update)
  .delete(RequireAuth, EventController.delete)

module.exports = event