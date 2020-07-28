const express = require("express");
const router = express.Router();
const projectsController = require("../../controllers/projectsController")

// Project Model
const Project = require("../../models/project");

// @route   Get api/projects
// @desc    Get all project
// @access  Public

router.route("/")
  .get(projectsController.findAll)
  .post(projectsController.create)

router.route("/:id")
  .delete(projectsController.remove)
  

// router.get("/", (req, res) => {
//   Project.find()
//     .sort({ date: -1 })
//     .then((projects) => res.json(projects));
// });

// @route   POST api/projects
// @desc    Create a project
// @access  Public

// router.post("/", (req, res) => {
//   const newProject = new Project({
//     name: req.body.name,
//   });
//   newProject.save().then((project) => res.json(project));
// });

// @route   DELETE api/projects
// @desc    DELETE a project
// @access  Public

// router.delete("/:id", (req, res) => {
//   Project.findById(req.params.id)
//     .then((project) => project.remove().then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ success: false }));
// });

module.exports = router;
