import { PokemonRes } from '../types/pokemonRes';
import { PokemonsRes } from '../types/pokemonsRes';
import { client } from './utils/request';

export const getPokemons = (page = 1, limit = 12) => {
  return client.get<PokemonsRes>(`/pokemons?page=${page}&limit=${limit}`);
};

export const getPokemon = (pokemonId: string) => {
  return client.get<PokemonRes>(`/pokemons/${pokemonId}`);
};
