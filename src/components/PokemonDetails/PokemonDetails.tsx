import React from 'react';
import './PokemonDetails.scss';
import { Pokemon } from '../../types/pokemon';
import { PokemonDetailsText } from './PokemonDetailsText';
import { PokemonDetailsClose } from './PokemonDetailsClose';

interface Props {
  pokemon: Pokemon;
  closeModal: () => void;
}

export const PokemonDetails: React.FC<Props> = ({ pokemon, closeModal }) => {
  return (
    <div className="modal">
      <article className="pokemon-details">
        <PokemonDetailsClose closeModal={closeModal} />
        <div className="pokemon-details__evolutions">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt=""
            className="pokemon-details__evolutions-img"
          />
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
            alt=""
            className="pokemon-details__evolutions-img"
          />
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
            alt=""
            className="pokemon-details__evolutions-img"
          />
        </div>

        <PokemonDetailsText
          pokemon={pokemon}
          closeModal={closeModal}
        />
      </article>
    </div>
  );
};
