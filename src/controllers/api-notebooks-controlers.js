const Notebooks = require("../models/products");

const handleError = (res, error) => res.status(500).send(error.message);



const getNotebooks = async (req, res) => {
  await Notebooks.find()
    .sort({ createdAt: -1 })
    .then((notebooks) => res.status(200).json(notebooks))
    .catch((error) => handleError(res, error));
};

const getOneNotebook = async (req, res) => {
  await Notebooks.findById(req.params.id)
    .then((notebook) => res.status(200).json(notebook))
    .catch((error) => handleError(res, error));
};

const deleteNotebook = async (req, res) => {
  await Notebooks.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((error) => handleError(res, error));
};

const editNotebook = async (req, res) => {
  const { name, img, price, oldPrice } = req.body;
  const { id } = req.params;
  await Notebooks.findByIdAndUpdate(
    id,
    { id, name, img, price, oldPrice },
    { new: true }
  )
    .then((elem) => res.status(200).json(elem))
    .catch((error) => handleError(res, error));
};

const addNotebook = async (req, res) => {
  const { id, name, img, price, oldPrice } = req.body;
  const notebooks = new Notebooks({ id, name, img, price, oldPrice });
  await notebooks
    .save()
    .then((notebooks) => res.status(201).json(notebooks))
    .catch((error) => handleError(res, error));
};

module.exports = {
  getNotebooks,
  getOneNotebook,
  editNotebook,
  deleteNotebook,
  addNotebook,
};
