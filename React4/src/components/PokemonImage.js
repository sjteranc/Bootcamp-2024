import React from 'react';

function PokemonImage({ id }) {
  return (
    <div className="pokemon-image">
      <img 
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(id).padStart(3, '0')}.png`} 
        alt="Pokemon" 
      />
    </div>
  );
}

export default PokemonImage;