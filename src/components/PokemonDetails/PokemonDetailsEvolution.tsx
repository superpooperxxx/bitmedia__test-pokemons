import React from 'react';

interface Props {
  name: string;
  img: string;
}

export const PokemonDetailsEvolution: React.FC<Props> = ({ name, img }) => {
  return (
    <div className="pokemon-details__evolution">
      <img
        src={img}
        alt={name}
        className="pokemon-details__evolution-img"
      />
      <p className="pokemon-details__evolution-name">{name}</p>
    </div>
  );
};
