import React, { useState } from 'react';

const PokemonSelector = ({ list, pokemonSelected }) => {
  const [selectedPokemon, setSelectedPokemon] = useState();
  const renderPokemons = list.map((pokemon) => {
    const { name, url } = pokemon;
    return <option value={name}>{name.toUpperCase()}</option>;
  });
  const handleChange = (e) => {
    setSelectedPokemon(e.target.value);
    pokemonSelected(e.target.value);
  };
  console.log('pokemons', list, selectedPokemon);
  return (
    <>
      <select value={selectedPokemon} onChange={handleChange}>
        {renderPokemons}
      </select>
    </>
  );
};

export default PokemonSelector;
