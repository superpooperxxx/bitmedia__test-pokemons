import React from 'react';
import './Nav.scss';
import { CustomNavLink } from './CustomNavLink';

export const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <CustomNavLink to="/">Pokémon List</CustomNavLink>
        </li>
        <li className="nav__item">
          <CustomNavLink to="/my-pokemons">My pokémons</CustomNavLink>
        </li>
      </ul>
    </nav>
  );
};
