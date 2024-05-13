const controllers = require("../controllers");
const router = require("express").Router();
const { auth } = require("../utils");



router.get("/", controllers.assets.get);

router.post("/post", controllers.assets.post);

router.put("/:id", auth(), controllers.assets.put);

router.delete("/:id", auth(), controllers.assets.delete);

module.exports = router;
