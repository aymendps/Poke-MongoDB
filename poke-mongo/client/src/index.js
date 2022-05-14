import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PokemonList from './components/PokemonList';
import reportWebVitals from './reportWebVitals';
import PokemonProTip from './components/PokemonProTip';
import PokemonMusic from './components/PokemonMusic';



ReactDOM.render(
  <React.StrictMode>
    <PokemonMusic/>
    <PokemonProTip/>
    <div id="main_container">
      <h1 id="main_title">◓ POKE-MONGO ◓</h1>
      <PokemonList/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
