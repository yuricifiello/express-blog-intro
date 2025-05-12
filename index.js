const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("immagini"));

app.get(`/`, (req, res) => {
  res.json("Server del mio blog");
});

app.get(`/bacheca`, (req, res) => {
  const posts = [
    {
      titolo: "Ciambella",
      contenuto:
        "Una ciambella profumata e soffice, perfetta per la colazione o la merenda.",
      immagine: "/images/ciambellone.jpeg",
      tags: ["dolce", "colazione", "limone", "forno"],
    },
    {
      titolo: "Cracker alla barbabietola",
      contenuto: "Snack salutare e croccante con un tocco di colore naturale.",
      immagine: "/images/crackewr_barbabietola.jpeg",
      tags: ["snack", "barbabietola", "vegano", "salutare"],
    },
    {
      titolo: "Pane fritto dolce",
      contenuto:
        "Una golosità della tradizione, ideale da gustare caldo con zucchero a velo.",
      immagine: "/images/pane_fritto_dolce.jpeg",
      tags: ["fritto", "dolce", "tradizione", "merenda"],
    },
    {
      titolo: "Pasta alla barbabietola",
      contenuto:
        "Un primo piatto colorato e gustoso, perfetto per stupire gli ospiti.",
      immagine: "/images/pasta_barbabietola.jpeg",
      tags: ["primo", "barbabietola", "vegetariano", "colorato"],
    },
    {
      titolo: "Torta paesana",
      contenuto: "Dolce tipico lombardo preparato con pane raffermo e cacao.",
      immagine: "/images/torta_paesana.jpeg",
      tags: ["dolce", "tradizione", "pane", "cioccolato"],
    },
  ];

  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost: ${port}`);
});
