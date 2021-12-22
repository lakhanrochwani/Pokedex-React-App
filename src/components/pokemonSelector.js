import React, { useState, useEffect } from 'react';

const PokemonSelector = ({ list, pokemonSelected, activePokemon }) => {
  const [selectedPokemon, setSelectedPokemon] = useState();
  const renderPokemons = list.map((pokemon) => {
    const { name, url } = pokemon;
    return <option value={name}>{name.toUpperCase()}</option>;
  });
  useEffect(() => {
    setSelectedPokemon(activePokemon);
  }, [activePokemon]);

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
