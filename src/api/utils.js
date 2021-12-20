export async function getPokemonList() {
  const data = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150'
  ).then((res) => res.json());
  return data.results;
}

export async function getPokemonDescription(id) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  ).then((res) => res.json());
  return pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, ' ');
}

export async function getPokemonImage(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
}
