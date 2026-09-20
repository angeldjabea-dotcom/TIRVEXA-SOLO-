const express = require("express");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/health", (req, res) => {
  res.json({
    status: "online",
    game: "TIRVEXA",
    version: "1.0.0",
    mode: "Solo"
  });
});

app.get("/api/config", (req, res) => {
  res.json({
    game: "TIRVEXA",
    version: "1.0.0",
    modes: ["Solo", "Entraînement"],
    multiplayer: false,
    owner: "DJABEA ANGEL",
    creator: "DJABEA ANGEL"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`TIRVEXA est lancé sur le port ${PORT}`);
});
