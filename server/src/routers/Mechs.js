const router = require("express").Router();
const { index, add, update, getMechById, deleteById } = require("../controllers/Mech");

router.get("/", index);
router.get('/:id', getMechById);
router.post("/add", add);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteById);

module.exports = router;

