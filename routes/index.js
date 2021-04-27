//this is the glue for the routes folder and the main   
const router =  require("express").Router(),
userRoutes = require("./userRoutes"),
subscriberRoutes = require("./subscriberRoutes"),
courseRoutes = require("./courseRoutes"),
homeRoutes = require("./homeRoutes"),
apiRoutes = require("./apiRoutes"),
errorRoutes = require("./errorRoutes");

//define name spaces
router.use("/users", userRoutes);
router.use("/courses", courseRoutes);
router.use("/subscribers", subscriberRoutes);
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/", errorRoutes);


module.exports = router;