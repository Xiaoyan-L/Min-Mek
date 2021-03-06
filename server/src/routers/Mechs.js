const router = require("express").Router();
const {
  index,
  add,
  update,
  getMechById,
  deleteById,
  getDropDown
} = require("../controllers/Mech");

router.get("/", index);
router.get("/:id", getMechById);
router.get("/org", index);
router.post("/add", add);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteById);

module.exports = router;
