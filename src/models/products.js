const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
    id: {
      type: String,
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
    // versionKey: false
  }
);

const Notebooks = mongoose.model("Notebooks", productsSchema);

module.exports = Notebooks;
