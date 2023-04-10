import React from 'react';
import './PokemonsList.scss';
import { PokemonCard } from '../PokemonCard';
import { Pokemon } from '../../types/pokemon';

interface Props {
  pokemons: Pokemon[];
}

export const PokemonsList: React.FC<Props> = ({ pokemons }) => (
  <div className="pokemons-list home-page__pokemons-list">
    {pokemons.length ? (
      <ul className="pokemons-list__list">
        {pokemons.map((pokemon) => (
          <li
            key={pokemon.id}
            className="pokemons__item"
          >
            <PokemonCard pokemon={pokemon} />
          </li>
        ))}
      </ul>
    ) : (
      <div className="pokemons-list__empty">
        {window.ethereum
          ? 'The list is empty 🥲'
          : 'Metamask was not detected 🥲'}
      </div>
    )}
  </div>
);
