const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/productlisting");

const product = require("./product");

app.post("/", urlencodedParser, (req, res) => {
  console.log(req.body);
  product.create(req.body);
  res.json("done");
});

app.get("/", async (req, res) => {
  let products = await product.find({ id: { $gt: 0 } });
  products = JSON.parse(JSON.stringify(products));
  // console.log(products);
  res.send(products);
});

app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  await product.findOneAndDelete({ id: req.params.id });
  res.json("done");
});

app.listen(3000);
