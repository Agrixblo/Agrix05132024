const controllers = require("../controllers");
const router = require("express").Router();
const { auth } = require("../utils");



router.get("/", controllers.farmers.get);

router.post("/post", controllers.farmers.post);

router.put("/:id", auth(), controllers.farmers.put);

router.delete("/:id", auth(), controllers.farmers.delete);

module.exports = router;
