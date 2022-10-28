const express = require("express");

const app = express();

let { products } = require("./data");

app.use(express.static("./method_public"));

app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  res.status(200).json({ sucess: true, yash: products });
});

app.post("/login", (req, res) => {
  const {name}=req.body;
  if(name){
    return res.status(200).send(`welcome ${name}`)
  }
  else 
  return res.status(401).send("Please Provide Credentials....")
});
app.listen(6066, () => {
  console.log(`server is running on port 6060`);
});
