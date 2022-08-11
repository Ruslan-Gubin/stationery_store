const express = require("express");
const { getPens, getOnePen, addPen, editPen, deletePen } = require("../controllers/api-pens-controllers");


const router = express.Router();

router.get("/api/pens", getPens);
router.get("/api/pens/:id", getOnePen);
router.post("/api/pens", addPen);
router.put("/api/pens", editPen);
router.delete("/api/pens/:id", deletePen);

module.exports = router;