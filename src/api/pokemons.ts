import { Pokemon } from '../types/pokemon';
import { client } from './utils/request';

interface PokemonsRes {
  status: string;
  results: number;
  total: number;
  data: {
    pokemons: Pokemon[];
  };
}

export const getPokemons = (page = 1, limit = 12) => {
  return client.get<PokemonsRes>(`/pokemons?page=${page}&limit=${limit}`);
};
