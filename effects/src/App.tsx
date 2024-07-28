import { useEffect, useState } from 'react';
import './App.css';
import { usePokemon } from './hooks/usePokemon';
import { useTimer } from './hooks/useTimer';

function App() {
  const { minutes, seconds } = useTimer();
  const [pokemonId, setPokemonId] = useState(4);
  const [revealed, setRevealed] = useState(false);
  const { pokemon, imageUrl } = usePokemon(pokemonId);

  useEffect(() => {
    console.log('Rendered');
  });

  useEffect(() => {
    console.log('run on mount');
  }, []);

  const handleClick = () => {
    setPokemonId(prevId => prevId + 1);
    setRevealed(false);
  };

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleRandomClick = () => {
    const randomId = Math.floor(Math.random() * 151) + 1;
    setPokemonId(randomId);
    setRevealed(false);
  };

  return (
    <>
      <h1>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
      <h2>{pokemon?.name}</h2>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={pokemon?.name} 
          className={revealed ? 'revealed' : 'hidden'}
        />
      )}
      <button onClick={handleReveal}>
        Reveal the Pokémon
      </button>
      <button onClick={handleClick}>
        Get another Pokémon
      </button>
      <button onClick={handleRandomClick}>
        Get a random Pokémon
      </button>
    </>
  );
}

export default App;
