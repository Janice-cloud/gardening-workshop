const router = require("express").Router();
const projectRoutes = require("./projects");
const userRoutes = require("./users");
// routes
router.use("/projects", projectRoutes);
router.use("/users", userRoutes);
module.exports = router;