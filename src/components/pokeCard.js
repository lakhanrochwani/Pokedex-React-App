import React, { useState, useEffect } from 'react';
import { getPokemonDescription, getPokemonImage } from '../api/utils.js';

const PokeCard = ({ pokemon, id, nextPokemon, prevPokemon }) => {
  let [name, setName] = useState(pokemon);
  let [img, setImg] = useState('');
  let [description, setDescription] = useState('');

  async function getPokemon() {
    const pokemonData = await getPokemonDescription(id);
    const pokemonImg = await getPokemonImage(id);
    setDescription(pokemonData);
    setImg(pokemonImg);
  }
  useEffect(() => {
    getPokemon();
  }, [id]);
  return (
    <>
      <hr />
      <div>
        <img src={img} alt="pokemon_image" />
      </div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <button
        onClick={() => {
          prevPokemon();
        }}
        disabled={id <= 1}
      >
        Prevous
      </button>
      &nbsp;
      <button
        onClick={() => {
          nextPokemon();
        }}
        disabled={id >= 150}
      >
        Next
      </button>
    </>
  );
};

export default PokeCard;
