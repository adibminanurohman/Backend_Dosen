const User = require("../models/User")
const jwt = require("jsonwebtoken")

class UserController {
  constructor() {
    this.createToken = this.createToken.bind(this)
    this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
  }

  createToken(_id) {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" })
  }

  async login(req, res) {
    const { email, password } = req.body

    try {
      const user = await User.login(email, password)

      // Create token
      const token = this.createToken(user._id)

      res.status(200).json({ email, token })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async signup(req, res) {
    const { name, email, password } = req.body

    try {
      const user = await User.signup(name, email, password)

      // Create token
      const token = this.createToken(user._id)

      res.status(200).json({ name, email, token })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async getAll(req, res) {
    try {
      const users = await User.find()

      res.status(200).json(users)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = new UserController()