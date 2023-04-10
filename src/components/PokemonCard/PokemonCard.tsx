import React, { useCallback, useState } from 'react';
import './PokemonCard.scss';
import { Pokemon } from '../../types/pokemon';
import { PokemonDetails } from '../PokemonDetails';

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line object-curly-newline
  const { imageUrl, name, type, level } = pokemon;

  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <>
      {showModal && (
        <PokemonDetails
          pokemon={pokemon}
          closeModal={closeModal}
        />
      )}
      <article className="pokemon-card">
        <button
          type="button"
          className="pokemon-card__btn"
          onClick={() => setShowModal(true)}
        >
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
        </button>
      </article>
    </>
  );
};
