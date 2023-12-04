const Event = require("../models/Event")

class EventController {
  constructor() {
    this.create = this.create.bind(this)
    this.get = this.get.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  async create(req, res) {
    const { name, date, time, location } = req.body

    try {
      const event = await Event.create(name, date, time, location)

      res.status(200).json(event)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async get(req, res) {
    const { id } = req.params

    try {
      const event = await Event.get(id)

      res.status(200).json(event)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async update(req, res) {
    const { id } = req.params
    const { name, date, time, location } = req.body

    try {
      const event = await Event.update(id, name, date, time, location)

      res.status(200).json(event)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async delete(req, res) {
    const { id } = req.params

    try {
      const event = await Event.delete(id)

      res.status(200).json(event)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = new EventController()