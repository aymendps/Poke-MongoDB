const Pokemon = require("./Pokemon");

var InsertPokemon = (req, res) => {   //Add one pokemon
  const newPokemon = new Pokemon(req.body);
  newPokemon.save()
  .then((newPokemon) => {
    res.status(201).send(newPokemon);
  })
  .catch((error) => {
    res.status(500).send(error);
  });
};

var FindAllPokemons = (req, res) => { // Returns all pokemons
  Pokemon.find({})
    .then((pokemons) => {
      res.status(200).send(pokemons);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

var DeleteAllPokemons = (req, res) => { // Deletes all pokemons
  Pokemon.find({})
    .deleteMany()
    .then((pokemons) => {
      res.status(200).send(pokemons);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

var FindByNumber = (req, res) => { // Returns a pokemon using its number
  Pokemon.find(req.params)
    .then((pokemon) => {
      res.status(200).send(pokemon);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

var DeleteByNumber = (req, res) => { // Deletes a pokemon using its number
  Pokemon.findOneAndDelete(req.params, { new: true })
    .then((pokemon) => {
      res.status(200).send(pokemon);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

var UpdateByNumber = (req, res) => { // Updates a pokemon using its number
  Pokemon.findOneAndUpdate(req.params, req.body, { new: true })
    .then((pokemon) => {
      res.status(200).send(pokemon);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

// Exports
exports.InsertPokemon = InsertPokemon;
exports.FindAllPokemons = FindAllPokemons;
exports.DeleteAllPokemons = DeleteAllPokemons;
exports.FindByNumber = FindByNumber;
exports.DeleteByNumber = DeleteByNumber;
exports.UpdateByNumber = UpdateByNumber;
