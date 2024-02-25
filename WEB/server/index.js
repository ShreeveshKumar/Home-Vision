const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const express = require("express");
const app = express();

app.use(express.json());

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

require("./DB/connection");

const file = new mongoose.Schema({
  file: String,
});

const docs = mongoose.model(file, "files");

app.post("upload_file", async (req, res) => {
  const data = req.body;
  let res_data = await docs.create(data);
  await res_data.save();
});

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.listen(4000);
