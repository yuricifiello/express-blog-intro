const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("immagini"));

app.get(`/`, (req, res) => {
  res.json("Server del mio blog");
});

const posts = require("./posts");

app.get(`/bacheca`, (req, res) => {
  res.json({ posts });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost: ${port}`);
});
