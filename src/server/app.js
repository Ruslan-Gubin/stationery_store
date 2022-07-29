const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const Products = require("../models/products");

const app = express();

const PORT = 4444;

const dbProducts =
  "mongodb+srv://Ruslan:gjcnfk156@cluster0.odh79.mongodb.net/products?retryWrites=true&w=majority";

mongoose
  .connect(dbProducts, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Product ok"))
  .catch((err) => console.log("DB error, err"));

let PRODUCTS = [];

app.use(cors());
app.use(express.json());
// GET
app.get("/api/products", (req, res) => {
  res.status(200).json(PRODUCTS);
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});
