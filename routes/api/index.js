const router = require("express").Router();
const articleRoutes = require("./articleRoutes");

// Book routes
router.use("/articles", articleRoutes);

module.exports = router;
