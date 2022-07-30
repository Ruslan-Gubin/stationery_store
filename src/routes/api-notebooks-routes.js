const express = require('express');
const { getNotebooks } = require('../controllers/api-notebooks-controlers');

const router = express.Router();

router.get("/api/Notebooks", getNotebooks);

module.exports = router;
