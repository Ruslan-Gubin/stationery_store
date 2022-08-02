const express = require('express');
const { getAllPosts, addPost, deletePost } = require('../controllers/api-post-controlers');
const router = express.Router();

router.get('/api/post', getAllPosts);
router.post('/api/post', addPost);
router.delete('/api/post/:id', deletePost);

module.exports = router;