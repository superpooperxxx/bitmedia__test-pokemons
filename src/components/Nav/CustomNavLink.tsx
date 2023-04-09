import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  to: string;
}

export const CustomNavLink: React.FC<Props> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return cn('nav__link', {
          'nav__link--active': isActive,
        });
      }}
    >
      {children}
    </NavLink>
  );
};
