import axios from "axios";

const PokeAPI = () => axios.create({
  baseURL: 'https://pokeapi.co'
});

export const getGeneration = (generation = 1) => {
  return PokeAPI().get(`api/v2/generation/${generation}`);
}

export const getPokemon = (url) => {
  return PokeAPI().get(url);
}
