const mongoose = require('mongoose')
const router = require("express").Router()

const Project = require('../models/Project.model')

router.post('/projects', (req, res, next) => {

  const { title, description } = req.body

  Project
    .create({ title, description, tasks: [] })
    .then(response => res.json(response))
    .catch((err) => {
      console.log("Error while creating the project", err)
      res.status(500).json({ message: "Error while creating the project", error: err })
    })
})

router.get('/projects', (req, res, next) => {

  Project
    .find()
    .populate('tasks')
    .then(response => res.json(response))
    .catch((err) => {
      console.log("Error while creating the project", err)
      res.status(500).json({ message: "Error while creating the project", error: err })
    })
})


router.get('/projects/:projectId', (req, res, next) => {

  const { projectId } = req.params

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  Project
    .findById(projectId)
    .populate('tasks')
    .then((project) => res.json(project))
    .catch((err) => {
      console.log("Error while retrieving the project", err)
      res.status(500).json({ message: "Error while creating the project", error: err })
    })
})

module.exports = router