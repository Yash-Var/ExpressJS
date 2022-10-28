const express = require("express");
const readfile = require("fs");
const app = express();
const { products } = require("./data");
const Port = 8000;
app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/product">Product</a>');
});
app.get("/api/product", (req, res) => {
  const newProduct = products.map((products) => {
    const { id, name, image } = products;
    return { id, name, image };
  });
  res.json(newProduct);
});
app.get("/api/product/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((products) => {
    // console.log(Number(productID));

    return products.id === Number(productID);
  });
  if (!singleProduct) {
    return res.status(404).send("Not Found");
  }
  res.json(singleProduct);
});
app.get("/api/yash/query", (req, res) => {
 const {serach,limit}=req.query
 let sortedProduct=[...products];
 if(serach){
    sortedProduct=sortedProduct.filter((products)=>{
        return products.name.startsWith(serach);
    })
 }
 if(limit){
    sortedProduct=sortedProduct.slice(0,Number(limit))
 }
 if(sortedProduct<1){
    return res.status(200).json({sucess:true,data:[]})
 }
 res.status(200).json(sortedProduct)
});
// app.all('*',(req,res)=>{
//     res.send("Page Not Found");
// })
app.listen(Port, () => {
  console.log(`Server is Running on ${Port}`);
});
