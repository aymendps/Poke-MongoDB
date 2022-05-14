import React from "react";
function PokemonMusic (){ // Responsible for playing a certain background music for the page
    const audioVolume = () => {
        var av = document.getElementById('audioPokeMusic');
        av.volume = 0.02;
    }
    React.useEffect(audioVolume,[]); // Set volume to a certain percentage (so it's not too loud)
    return (
        <audio id='audioPokeMusic' muted={false}  controls={false} autoPlay ={true} loop={true}> 
        <source type = 'audio/mp3' src = '/audioMusic.mp3' />  
        </audio>
         
    );
}
export default PokemonMusic;
