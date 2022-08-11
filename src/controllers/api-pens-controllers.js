const { Pens } = require("../models/products");

const handleError = (res, error) => res.status(500).send(error.message);

const getPens = async (req, res) => {
  await Pens.find()
    .sort({ createdAt: -1 })
    .then((notebooks) => res.status(200).json(notebooks))
    .catch((error) => handleError(res, error));
};

const getOnePen = async (req, res) => {
  await Pens.findById(req.params.id)
    .then((notebook) => res.status(200).json(notebook))
    .catch((error) => handleError(res, error));
};

const deletePen = async (req, res) => {
  await Pens.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((error) => handleError(res, error));
};

const editPen = async (req, res) => {
  const { name, img, price, oldPrice } = req.body;
  const { id } = req.params;
  await Pens.findByIdAndUpdate(
    id,
    { id, name, img, price, oldPrice },
    { new: true }
  )
    .then((elem) => res.status(200).json(elem))
    .catch((error) => handleError(res, error));
};

const addPen = async (req, res) => {
  const { id, name, img, price, oldPrice } = req.body;
  const notebooks = new Pens({ id, name, img, price, oldPrice });
  await notebooks
    .save()
    .then((notebooks) => res.status(201).json(notebooks))
    .catch((error) => handleError(res, error));
};

module.exports = {
  getPens,
  getOnePen,
  editPen,
  deletePen,
  addPen,
};
