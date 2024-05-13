const controllers = require("../controllers");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/", controllers.transactions.get);

router.post("/", auth(), controllers.transactions.post);

// router.put("/:id", auth(), controllers.transactions.put);

// router.delete("/:id", auth(), controllers.transactions.delete);

module.exports = router;
