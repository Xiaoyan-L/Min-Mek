const router = require("express").Router();
const { index, add, update, getPilotById, deleteById } = require("../controllers/Pilot");

router.get("/", index);
router.post("/add", add);
router.put("/update/:id", update);
router.get("/:id", getPilotById);
router.delete("/delete/:id", deleteById);

module.exports = router;

