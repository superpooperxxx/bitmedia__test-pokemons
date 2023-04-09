import React, { useCallback, useEffect, useState } from 'react';
import './HomePage.scss';
import { getPokemons } from '../../api/pokemons';
import { PokemonsList } from '../../components/PokemonsList';
import { PokemonsBtns } from '../../components/PokemonsBtns';
import { Pokemon } from '../../types/pokemon';
import { Loader } from '../../components/Loader';

export const HomePage: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handlePage = useCallback((action: 'inc' | 'dec') => {
    switch (action) {
      case 'inc':
        setPage((current) => current + 1);
        break;
      case 'dec':
        setPage((current) => current - 1);
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);

    getPokemons(page)
      .then((res) => {
        const { data, total, results } = res;

        setPokemons(data.pokemons);
        if (!maxPages) {
          setMaxPages(Math.ceil(total / results));
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        window.alert(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  return (
    <main className="home-page">
      <div className="container">
        {isLoading && <Loader />}
        <PokemonsList pokemons={pokemons} />
        {!isLoading && (
          <PokemonsBtns
            page={page}
            maxPages={maxPages}
            updatePage={handlePage}
          />
        )}
      </div>
    </main>
  );
};
