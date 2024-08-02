import React from 'react';

function PokemonType({ types }) {
    return (
      <div className="pokemon-types">
        {types.map(typeInfo => (
          <span key={typeInfo.type.name} className={`type ${typeInfo.type.name}`}>
            {typeInfo.type.name === 'fire' && '🔥 '}
            {typeInfo.type.name}
          </span>
        ))}
      </div>
    );
  }

export default PokemonType;