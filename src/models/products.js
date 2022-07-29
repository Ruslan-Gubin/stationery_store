import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema(
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

export default mongoose.model("Products", ProductsSchema);
