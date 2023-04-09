import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../static/pokemons-logo.png';
import { Nav } from '../Nav';

export const Header: React.FC = () => {
  return (
    <header className="header page__header">
      <Link to="/">
        <img
          src={Logo}
          alt="Pokemons logo"
          className="header__logo"
        />
      </Link>

      <Nav />
    </header>
  );
};
