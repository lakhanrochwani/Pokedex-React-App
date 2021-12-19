import React, { useState, useEffect } from 'react';
import { getPokemonDescription, getPokemonImage } from '../api/utils.js';

const PokeCard = ({ pokemon }) => {
  let [name, setName] = useState(pokemon);
  let [img, setImg] = useState('');
  let [description, setDescription] = useState('');

  async function getPokemon() {
    const pokemonData = await getPokemonDescription();
    const pokemonImg = await getPokemonImage();
    setDescription(pokemonData);
    setImg(pokemonImg);
  }
  useEffect(() => {
    getPokemon();
  }, []);
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
      <button>Prevous</button>&nbsp;
      <button>Next</button>
    </>
  );
};

export default PokeCard;
