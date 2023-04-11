import { Pokemon } from './pokemon';

export interface PokemonRes {
  status: string;
  data: {
    pokemon: Pokemon;
  };
}
