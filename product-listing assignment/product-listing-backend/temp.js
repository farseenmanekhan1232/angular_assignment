let productList = [];

const url = "http://localhost:3000/"; // Replace with your endpoint URL

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((items) => {
    items.products = items.products.slice(0, 10);
    items.products.forEach(
      ({ id, title, price, description, images, ...others }) => {
        if (images[1]) {
          productList.push({
            id: id,
            title: title,
            price: price,
            description: description,
            thumbnail: images[1],
          });
        }
      }
    );
  })
  .then(() => {
    productList.forEach((d) => {
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(d),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response:", data);
          // Process the response data
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle any errors
        });
    });
  });
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/productlisting");

// async function x(id) {
//   const product = require("./product");
//   await product.findOneAndDelete({ id: id });
// }

// let i = 1;
// while (i < 31) {
//   x(i);
//   i++;
// }
