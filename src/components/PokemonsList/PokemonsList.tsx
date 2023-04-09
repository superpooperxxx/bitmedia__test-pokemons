import React from 'react';
import './PokemonsList.scss';
import { PokemonCard } from '../PokemonCard';
import { Pokemon } from '../../types/pokemon';

interface Props {
  pokemons: Pokemon[];
}

export const PokemonsList: React.FC<Props> = ({ pokemons }) => (
  <ul className="pokemons-list home-page__pokemons-list">
    {pokemons.map((pokemon) => (
      <li
        key={pokemon.id}
        className="pokemons__item"
      >
        <PokemonCard pokemon={pokemon} />
      </li>
    ))}
  </ul>
);
