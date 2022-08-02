const express = require("express");
const {
  getNotebooks,
  addNotebook,
  getOneNotebook,
  editNotebook,
  deleteNotebook,
} = require("../controllers/api-notebooks-controlers");
const router = express.Router();


router.get("/api/notebooks", getNotebooks);
router.get("/api/notebooks/:id", getOneNotebook);
router.post("/api/notebooks", addNotebook);
router.put("/api/notebooks", editNotebook);
router.delete("/api/notebooks/:id", deleteNotebook);

module.exports = router;
