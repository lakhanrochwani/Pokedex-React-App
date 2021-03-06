import React, { useState, useEffect } from 'react';
import PokemonSelector from './components/pokemonSelector';
import PokeCard from './components/pokeCard';
import { getPokemonList } from './api/utils.js';
import './style.css';

export default function App() {
  const [list, setList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('bulbasaur');
  const [pokemonId, setPokemonId] = useState(1);

  async function getPokemons() {
    const pokeList = await getPokemonList();
    console.log(pokeList);
    setList(pokeList);
  }

  const handleSelected = (pokemon) => {
    console.log('POKEMON::', pokemon);
    setSelectedPokemon(pokemon);
    let pokemon_species = list.find((species) => {
      return species.name === pokemon;
    });
    let url = pokemon_species.url.slice(-5);
    let id = url.match(/(\d+)/)[0];
    setPokemonId(id);
  };

  const handleNext = () => {
    setPokemonId(pokemonId + 1);
    let name = list.findIndex((species) => {
      return species.name === selectedPokemon;
    });
    setSelectedPokemon(list[name + 1].name);
  };

  const handlePrevious = () => {
    setPokemonId(pokemonId - 1);
    let name = list.findIndex((species) => {
      return species.name === selectedPokemon;
    });
    setSelectedPokemon(list[name - 1].name);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      <h1>PokeDex</h1>
      <PokemonSelector
        list={list}
        pokemonSelected={handleSelected}
        id={pokemonId}
        activePokemon={selectedPokemon}
      />
      <PokeCard
        pokemon={selectedPokemon}
        id={pokemonId}
        nextPokemon={handleNext}
        prevPokemon={handlePrevious}
      />
    </div>
  );
}
