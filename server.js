const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const user = require("./routes/User")
const event = require("./routes/Event")
require("dotenv").config()

// Express server
const server = express()

// Desctructing process.env
const { PORT, MONG_URI } = process.env

// Middleware
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
server.use("/api", user)
server.use("/api", event)

mongoose.connect(MONG_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on http://127.0.0.1:${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })