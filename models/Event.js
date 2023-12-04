const mongoose = require("mongoose")

const Schema = mongoose.Schema

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true,
    default: "Online"
  }
})

module.exports = mongoose.model("event", EventSchema)