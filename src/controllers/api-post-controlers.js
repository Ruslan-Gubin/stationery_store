const Post = require("../models/post");

const handleError = (res, error) => res.status(500).send(error.message);

const getAllPosts = async (req, res) => {
  await Post.find()
    .sort({ createdAt: -1 })
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
};
const addPost = async (req, res) => {
  const { title, text } = req.body;
  const post = new Post({ title, text });
  await post
    .save()
    .then((post) => res.status(201).json(post))
    .catch((error) => handleError(res, error));
};

const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((error) => handleError(res, error));
};

module.exports = {
  getAllPosts,
  addPost,
  deletePost,
};
