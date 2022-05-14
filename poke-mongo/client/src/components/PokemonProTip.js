import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import React from 'react';

function timeout(delay) { // wait for delay in ms
    return new Promise( res => setTimeout(res, delay) );
}

const x = async () => { // send pretty notification using Alertifyjs with cool facts in them
    while(true)
    {
        await timeout(5000);
        alertify.message("Pro Tip: Click on a Pokemon card to view its official wiki page!");
        await timeout(30000);
        alertify.message("Fact: There are 898 Pokemons, out of which 151 are the originals!");
        await timeout(30000);
        alertify.message("Fact: Pikachu directly translates as 'Sparkly mouse noise'!");
        await timeout(30000);
        alertify.message("Fact: Female Pikachu's have a dent in the end of their tails!");
        await timeout(30000);
        alertify.message("Fact: Some of the rarest Pokémon cards are worth over $100,000!");
        await timeout(25000);  
    }
}

function PokemonProTip()
{
    React.useEffect(x,[]); 
    return <></>;
}

export default PokemonProTip;