import React, { useState, useMemo } from 'react';
import { Pokemon } from '../types/pokemon';

interface UserPokemonsContextType {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

export const UserPokemonsContext = React.createContext<UserPokemonsContextType>(
  {
    pokemons: [],
    setPokemons: () => {},
  },
);

export const UserPokemonsProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const contextValue = useMemo(
    () => ({
      pokemons,
      setPokemons,
    }),
    [pokemons],
  );

  return (
    <UserPokemonsContext.Provider value={contextValue}>
      {children}
    </UserPokemonsContext.Provider>
  );
};
