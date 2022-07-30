const Notebooks = require('../models/products');
const notebooks = require('../models/products');

const handleError = (res, error) => res.status(500).send(error.message);

const getNotebooks = (req, res) => {
  notebooks
    .find()
    .sort({ createdAt: -1 })
    .then((notebooks) => res.status(200).json(notebooks))
    .catch((error) => handleError(res, error));
};

const getNotebook = (req, res) => {
  notebooks
    .findById(req.params.id)
    .then((notebook) => res.status(200).json(notebook))
    .catch((error) => handleError(res, error));
};

const deleteNotebook = (req, res) => {
  notebooks
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((error) => handleError(res, error));
};

const editNotebook = (req, res) => {
  const { name, img, price, oldPrice } = req.body;
  const { id } = req.params;
  notebooks
    .findByIdAndUpdate(id, { id, name, img, price, oldPrice }, { new: true })
    .then((elem) => res.status(200).json(elem))
    .catch((error) => handleError(res, error));
};

const addNotebook = (req, res) => {
  const { name, img, price, oldPrice } = req.body;
  const notebooks = new Notebooks({ id, name, img, price, oldPrice });
  notebooks
    .save()
    .then((notebooks) => res.status(200).json(notebooks))
    .catch((error) => handleError(res, error));
};
const addNewNotebook = (req, res ) => {
  
};

module.exports = {
  getNotebooks,
  getNotebook,
  editNotebook,
  deleteNotebook,
  addNotebook,
};
