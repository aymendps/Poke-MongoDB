import React from "react";
import PokemonCard from "./PokemonCard";
import PokemonFilterBar from "./PokemonFilterBar";
import PokemonButton,{addPokemon,editPokemon,deletePokemon} from './PokemonButton'

const compareArrays = (a,b) => 
{
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};



function PokemonList()
{   
    const [data, setData] = React.useState([]); // used to know what cards to currently display, this is impacted by filtering pokemons by types
    const [initialData, setInitialData] = React.useState([]); // holds all pokemons in the database

    const getCurrentList = () => { // gets all pokemons in the mongo db database and stores them in initialData
        fetch(process.env.REACT_APP_API_URL)
        .then(res => {return res.json();})
        .then(json => {setInitialData(json);
        });  
    }

    const getCardInfo = (number) => { // returns the card object with the given number
        var result = initialData.find(card => {
            return card.number.toString() === number;
          })
        return result;
    }

    const filterList = () => { // used to know what object to show (filtering pokemons by type)
        var v = document.getElementById("filterBar").value;
        if(v==="All") // show all pokemons
        {
            setData(initialData); // set data to initialData, displaying all pokemons
        }
        else // another value was picked. example: 'Fire'
        {
            var tempData = [];
            var f = v.split(" ");
            initialData.map((card) => { // loop through initialData to find which cards have the given type (example: 'Fire') and pushes the results into data
                if(compareArrays(f, card.types)===true)
                {
                    tempData.push(card);
                }
                return null;
            })
            setData(tempData); // set data to the filtered array, displaying only the filtered results (example: only fire pokemons)

        } 
    }

    React.useEffect(() => {getCurrentList();}, []); // Execute this once initially to store the database contents in initialData
    React.useEffect(filterList, [initialData]); // Every time initialData is changed, call filterList to update what is displayed

    const showList = data.map((card) => { // returns card element for each card in the data array to know what to display
        return (<li key={card.number}>
                    <PokemonCard name={card.name} imageUrl={card.imageUrl} 
                    types={card.types} number={card.number} />
                </li>);
    });

    return (
            <>
                <PokemonButton title = {addPokemon} update = {getCurrentList}/>
                <PokemonButton title = {editPokemon} update = {getCurrentList} getCard = {getCardInfo}/>
                <PokemonButton title = {deletePokemon} update = {getCurrentList}/>
                <PokemonFilterBar change= {filterList}/>
                <div className="list">
                   {showList}
                </div>
            </>

    );
}

export default PokemonList;