const express = require("express");
const app = express();
const port = 3000;

app.get(`/`, (req, res) => {
  res.json("Server del mio blog");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost: ${port}`);
});
