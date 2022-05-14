 const fs = require("fs");
 const mongoose = require('mongoose');
 const Pokemon = require('../resources/pokemon/Pokemon');

 const pokemons = JSON.parse(
  fs.readFileSync(__dirname + "/../../data/pokemon.json"
  ),
  "utf-8"
);

 const getCount = async () => { 
  const count = await mongoose.connection.db.collection('pokemons').countDocuments()
  .then(res => {return res}); // Returns number of documents in our mongodb collection
  if (count === 0)  // if it's empty, then populate it using pokemon.json
  {
    Pokemon.insertMany(pokemons);
    console.log("Database was empty. Added initial db of pokemons");
  }
  else // do nothing if it's already populated
  {
    console.log("Database already has " + count + " pokemons");
  }
}

 //Connect to database

 mongoose.connect('mongodb://localhost:27017/pokemon-management',()=>
 {
    console.log("Connected to database");
    getCount(); // Populates db if it's empty, else does nothing
 });

//Export 
 module.exports = mongoose