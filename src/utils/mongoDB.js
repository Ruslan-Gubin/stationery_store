const { MongoClient } = require("mongodb");
const { async } = require("regenerator-runtime");

const DATA_PRODUCTS = new MongoClient(
  "mongodb+srv://Ruslan:gjcnfk156@cluster0.odh79.mongodb.net/products?retryWrites=true&w=majority"
);
const DATA_NOTEBOOKS = "notebooks";

DATA_PRODUCTS.connect();
const users = DATA_PRODUCTS.db().collection(DATA_NOTEBOOKS);
 const PRODUCTS_NOTEBOOKS = users.find({}).toArray();

export const testMongo = PRODUCTS_NOTEBOOKS(JSON.stringify);
console.log(testMongo);
// console.log(PRODUCTS_NOTEBOOKS);

const start = async (data, collection) => {
  try {
    await data.connect();
    console.log("соединение установлено");
    // await data.db().createCollection(collection);
    const users = data.db().collection(collection);
    //  await users.insertOne({id: "el1", "name": "Тетрадь 24 l"});
    const user = await users.findOne({ id: "el5" });
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};
start(DATA_PRODUCTS, DATA_NOTEBOOKS);

// class DataBase {
//   constructor(options) {
//     this.data = options.data;
//     this.collections = options.collections;
//   }
//   start(){
//     try {
//       (async () => {
//         await data.content();
//         console.log("соединение установлено");
//         const users = data.db().collection(this.collections);
//         const user = await users.findOne({ id: "el1" });
//         console.log(user);
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }

// const dataBaseProducts = new DataBase({
//   data: DATA_PRODUCTS,
//   collections: DATA_NOTEBOOKS
// });

// dataBaseProducts.start();
