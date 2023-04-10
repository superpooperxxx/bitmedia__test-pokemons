/* eslint-disable operator-linebreak */
import React from 'react';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';
import { Pokemon } from '../../types/pokemon';

interface Props {
  isSigning: boolean;
  signMessage: (message: string, pokemonId: string) => void;
  pokemon: Pokemon;
}

export const PokemonDetailsMetamask: React.FC<Props> = ({
  isSigning,
  signMessage,
  pokemon,
}) => {
  const location = useLocation();
  const path = location.pathname;

  window.console.log(path);

  const message =
    path === '/my-pokemons'
      ? `I want evolve ${pokemon.name} to {pokemonNameEvolved}`
      : `I want add ${pokemon.name} to my list`;

  const btnText = path === '/my-pokemons' ? 'Evolve' : 'Add to My list';

  return (
    <button
      type="button"
      className={cn('pokemon-details__metamask', {
        'pokemon-details__metamask--disabled': isSigning,
      })}
      onClick={() => {
        signMessage(message, pokemon.id);
      }}
    >
      {btnText}
    </button>
  );
};
