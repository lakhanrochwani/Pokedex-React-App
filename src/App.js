import React, { useState, useEffect } from 'react';
import PokemonSelector from './components/pokemonSelector';
import PokeCard from './components/pokeCard';
import { getPokemonList } from './api/utils.js';
import './style.css';

export default function App() {
  const [list, setList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');

  async function getPokemons() {
    const pokeList = await getPokemonList();
    console.log(pokeList);
    setList(pokeList);
  }

  const handleSelected = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      <h1>PokeDex</h1>
      <PokemonSelector list={list} pokemonSelected={handleSelected} />
      <PokeCard pokemon={selectedPokemon} />
    </div>
  );
}
