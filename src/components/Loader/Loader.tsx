import React from 'react';
import './Loader.scss';
import Pokeball from '../../static/loader.png';

export const Loader: React.FC = () => {
  return (
    <div className="loader">
      <img
        src={Pokeball}
        alt="pokeball"
        className="loader__img"
      />
      <h2 className="loader__text">Loading</h2>
    </div>
  );
};
