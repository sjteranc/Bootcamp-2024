import React, { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import './App.css';

// Define la función para generar un ID aleatorio
const generateRandomId = () => Math.floor(Math.random() * 898) + 1;

function App() {

  const [pokemonId, setPokemonId] = useState(generateRandomId());
  const [pokemonData, setPokemonData] = useState<any>(null); 

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, [pokemonId]);

  const handleRandomPokemon = () => {
    setPokemonId(generateRandomId());
  };

  return (
    <div className="App">
      <PokemonCard pokemonData={pokemonData} />
      <div className="navigation">
        <button onClick={handleRandomPokemon}>Mostrar Pokémon Aleatorio</button>
      </div>
    </div>
  );
}

export default App;
