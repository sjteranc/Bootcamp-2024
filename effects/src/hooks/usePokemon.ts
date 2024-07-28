import { useEffect, useState } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon/';

function getData(id: number) {
  return fetch(url + id)
    .then(response => response.json())
    .then(data => data);
}

function getPokemonImage(id: number): string {
  const realId = `00${id}`.slice(-3);
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${realId}.png`;
}

function usePokemon(id: number): { pokemon: any, imageUrl: string | null } {
  const [pokemon, setPokemon] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    getData(id)
      .then(pokemon => {
        setPokemon(pokemon);
        setImageUrl(getPokemonImage(id));
        console.log(pokemon);
      });
  }, [id]);

  return { pokemon, imageUrl };
}

export { usePokemon };
