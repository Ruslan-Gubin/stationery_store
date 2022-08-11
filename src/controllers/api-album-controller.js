const { Album } = require("../models/products");


const handleError = (res, error) => res.status(500).send(error.message);



const getAlbums = async (req, res) => {
  await Album.find()
    .sort({ createdAt: -1 })
    .then((notebooks) => res.status(200).json(notebooks))
    .catch((error) => handleError(res, error));
};

const getOneAlbum = async (req, res) => {
  await Album.findById(req.params.id)
    .then((notebook) => res.status(200).json(notebook))
    .catch((error) => handleError(res, error));
};

const deleteAlbum = async (req, res) => {
  await Album.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((error) => handleError(res, error));
};

const editAlbum = async (req, res) => {
  const { name, img, price, oldPrice } = req.body;
  const { id } = req.params;
  await Album.findByIdAndUpdate(
    id,
    { id, name, img, price, oldPrice },
    { new: true }
  )
    .then((elem) => res.status(200).json(elem))
    .catch((error) => handleError(res, error));
};

const addAlbum = async (req, res) => {
  const { id, name, img, price, oldPrice } = req.body;
  const notebooks = new Album({ id, name, img, price, oldPrice });
  await notebooks
    .save()
    .then((notebooks) => res.status(201).json(notebooks))
    .catch((error) => handleError(res, error));
};

module.exports = {
  getAlbums,
  getOneAlbum,
  editAlbum,
  deleteAlbum,
  addAlbum,
};

