const express = require("express");
const router = express.Router();
const messagesController = require("../../../controllers/api/v1/messages");

router.get("/", messagesController.getAll);

router.post("/", messagesController.create);

router.get("/:id", messagesController.specific);

router.put("/:id", messagesController.update);

router.delete("/:id", messagesController.rem);

router.search("/?user", messagesController.rem);

module.exports = router;
