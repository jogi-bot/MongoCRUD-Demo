const express = require("express");
const router = express.Router();

const App = require("../controller/controller");

router.post("/create", App.create);

router.get("/get-all", App.findAll);

router.get("/message/:messageId", App.findOne);

router.put("/message/:messageId", App.update);

router.delete("/message/:messageId", App.delete);

module.exports = router;
