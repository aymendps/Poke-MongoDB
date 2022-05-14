const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Pokemon = require("./resources/pokemon/Pokemon.js");
const pokemonRouter = require("./resources/pokemon/pokemonRouter");
const db = require("./db");
const app = express();
const PORT = 8000;

app.use(bodyParser());
app.use(cors());
app.use("/api/pokemon", pokemonRouter);
app.listen(PORT, () => {
  console.log(`Started listening to requests on port ${PORT}`);
});
