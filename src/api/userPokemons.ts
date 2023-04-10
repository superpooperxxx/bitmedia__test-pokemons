import { Pokemon } from '../types/pokemon';
import { PokemonsRes } from '../types/pokemonsRes';
import { client } from './utils/request';

interface NewPokemon {
  pokemonId: string;
  signedMessage: string;
}

interface AddedUserPokemonRes {
  status: string;
  data: {
    pokemons: Pokemon;
  };
}

export const getPokemonsOfUser = (userId: string) => {
  return client.get<PokemonsRes>(`/user-pokemons/${userId}`);
};

export const addPokemonToUser = (data: NewPokemon) => {
  return client.post<AddedUserPokemonRes>('/user-pokemons/add', data);
};
