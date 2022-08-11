const express = require("express");
const {
  getAlbums,
  getOneAlbum,
  deleteAlbum,
  addAlbum,
  editAlbum,
} = require("../controllers/api-album-controller");

const router = express.Router();

router.get("/api/album", getAlbums);
router.get("/api/album/:id", getOneAlbum);
router.post("/api/album", addAlbum);
router.put("/api/album", editAlbum);
router.delete("/api/album/:id", deleteAlbum);

module.exports = router;
