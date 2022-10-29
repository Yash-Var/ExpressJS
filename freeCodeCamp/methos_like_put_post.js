const express = require("express");

const app = express();

let { people } = require("./data");

app.use(express.static("./method_public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people,name] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  } else return res.status(401).send("Please Provide Credentials....");
});
app.listen(6066, () => {
  console.log(`server is running on port 6060`);
});
