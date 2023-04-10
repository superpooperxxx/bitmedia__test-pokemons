export interface PokemonsRes {
  status: string;
  results: number;
  total: number;
  data: {
    pokemons: Pokemon[];
  };
}
