const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: Number,
  },
  {
    timestamps: true,
  }
);

const notebooks = mongoose.model('notebooks', productsSchema);

module.exports = notebooks;