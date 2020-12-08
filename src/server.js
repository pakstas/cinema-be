const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const port = process.env.SERVER_PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
