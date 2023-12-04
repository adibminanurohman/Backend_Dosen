const express = require("express")
const UserController = require("../controllers/UserController")
const RequireAuth = require("../middleware/RequireAuth")

const user = express.Router()

user.post("/dosen/login", UserController.login)
user.post("/dosen/signup", UserController.signup)
user.route("/dosen")
  .get(RequireAuth, UserController.getAll)

module.exports = user