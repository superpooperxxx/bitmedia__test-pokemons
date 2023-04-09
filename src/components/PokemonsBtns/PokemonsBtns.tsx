import React from 'react';
import './PokemonsBtns.scss';
import cn from 'classnames';

interface Props {
  page: number;
  maxPages: number;
  updatePage: (action: 'inc' | 'dec') => void;
}

export const PokemonsBtns: React.FC<Props> = ({
  page,
  maxPages,
  updatePage,
}) => {
  return (
    <div className="pokemons-btns">
      <button
        type="button"
        className={cn('pokemons-btns__btn', {
          'pokemons-btns__btn--disabled': page === 1,
        })}
        onClick={() => updatePage('dec')}
      >
        Prev
      </button>
      <button
        type="button"
        className={cn('pokemons-btns__btn', {
          'pokemons-btns__btn--disabled': page === maxPages,
        })}
        onClick={() => updatePage('inc')}
      >
        Next
      </button>
    </div>
  );
};
