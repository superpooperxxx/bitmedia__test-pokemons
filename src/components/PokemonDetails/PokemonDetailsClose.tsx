import React from 'react';
import IconClose from '../../static/icon__close.svg';

interface Props {
  closeModal: () => void;
}

export const PokemonDetailsClose: React.FC<Props> = ({ closeModal }) => (
  <button
    type="button"
    className="pokemon-details__close"
    aria-label="close modal"
    onClick={() => closeModal()}
  >
    <img
      src={IconClose}
      alt="close icon"
      className="pokemon-details__cross"
    />
  </button>
);
