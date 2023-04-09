import React from 'react';
import './PokemonCard.scss';
import { Pokemon } from '../../types/pokemon';

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  // eslint-disable-next-line object-curly-newline
  const { imageUrl, name, type, level } = pokemon;

  return (
    <article className="pokemon-card">
      <img
        src={imageUrl}
        alt={`of ${name} pokemon`}
        className="pokemon-card__image"
      />
      <h3 className="pokemon-card__name">{name}</h3>
      <p className="pokemon-card__type">
        Type:
        <span className="pokemon-card__value">{` ${type}`}</span>
      </p>
      <p className="pokemon-card__level">
        Level:
        <span className="pokemon-card__value">{` ${level}`}</span>
      </p>
    </article>
  );
};
