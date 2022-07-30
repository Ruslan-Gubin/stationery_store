const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("../models/products");
const notebooks = require("../models/products");

const app = express();

const PORT = 4444;

const dbProducts =
  "mongodb+srv://Ruslan:gjcnfk156@cluster0.odh79.mongodb.net/products?retryWrites=true&w=majority";

mongoose
  .connect(dbProducts, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("DB Product ok"))
  .catch((err) => console.log("DB error, err"));

app.use(cors());
app.use(express.json());

app.get("/api/products", async (req, res) => {  
await  notebooks
  .find()
  .then((products) =>  res.json(products))
  .catch((error) => {
    console.log(error);
   });
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});
