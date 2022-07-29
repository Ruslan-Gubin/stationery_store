const { MongoClient } = require("mongodb");

const DATA_PRODUCTS = new MongoClient(
  "mongodb+srv://Ruslan:gjcnfk156@cluster0.odh79.mongodb.net/products?retryWrites=true&w=majority"
);

const DATA_NOTEBOOKS = "notebooks";

const start = async (data, collection) => {
  try {
    await data.connect();
    console.log("соединение установлено");
    // await data.db().createCollection(collection);
    const users = data.db().collection(collection);
    //  await users.insertOne({id: "el1", "name": "Тетрадь 24 l"});
    const user = await users.find({}).toArray();
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};
start(DATA_PRODUCTS, DATA_NOTEBOOKS);
const test = start(DATA_PRODUCTS, DATA_NOTEBOOKS);
module.exports =  test;