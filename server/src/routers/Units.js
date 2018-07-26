const router = require("express").Router();
const { index, add, update, findById }  = require("../controllers/Unit");

router.get('/', index);
router.post('/add', add);
router.put('/update/:id', update);
//router.get('/:id', findById);

module.exports = router;