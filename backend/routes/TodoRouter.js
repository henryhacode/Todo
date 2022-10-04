const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/TodoController");

router.get("/", TodoController.getAll);
router.get("/:id", TodoController.getById);
router.post("/", TodoController.add);
router.delete("/:id", TodoController.deleteById);

module.exports = router;
