/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable operator-linebreak */
import React from 'react';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';
import { Pokemon } from '../../types/pokemon';

interface Props {
  isSigning: boolean;
  addPokemon: (message: string) => void;
  evolvePokemon: (message: string) => void;
  pokemon: Pokemon;
  evolutionPokemon: Pokemon | null;
}

export const PokemonDetailsMetamask: React.FC<Props> = ({
  isSigning,
  addPokemon,
  evolvePokemon,
  pokemon,
  evolutionPokemon,
}) => {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/my-pokemons') {
    return (
      <button
        type="button"
        className={cn('pokemon-details__metamask', {
          'pokemon-details__metamask--disabled':
            isSigning || !pokemon.evolution.length,
        })}
        onClick={() => {
          evolvePokemon(
            `I want evolve ${pokemon.name} to ${evolutionPokemon!.name}`,
          );
        }}
      >
        Evolve
      </button>
    );
  }

  return (
    <button
      type="button"
      className={cn('pokemon-details__metamask', {
        'pokemon-details__metamask--disabled': isSigning,
      })}
      onClick={() => {
        addPokemon(`I want add ${pokemon.name} to my list`);
      }}
    >
      Add to My list
    </button>
  );
};
