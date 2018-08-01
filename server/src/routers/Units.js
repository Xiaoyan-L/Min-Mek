const router = require("express").Router();
const { index, add, update, findUnitByID, getAllOrg } = require("../controllers/Unit");

router.get("/", index);
router.post("/add", add);
router.put("/update/:id", update);
router.get("/:id", findUnitByID);
router.get("/org/:id", getAllOrg);

module.exports = router;
