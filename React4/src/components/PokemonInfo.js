import React from 'react';

function PokemonInfo({ id, name }) {
  return (
    <div className="pokemon-info">
      <div className="pokemon-number">#{String(id).padStart(3, '0')}</div>
      <div className="pokemon-name">{name}</div>
    </div>
  );
}

export default PokemonInfo;