const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
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
const Album = mongoose.model("Album", productsSchema);
const Pens = mongoose.model("Pens", productsSchema);

module.exports = {
  Notebooks,
  Album,
  Pens
};
