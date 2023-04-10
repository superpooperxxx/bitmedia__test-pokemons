import React, { useEffect, useState, useCallback } from 'react';
import './MyPokemonsPage.scss';
import { getPokemonsOfUser } from '../../api/userPokemons';
import { Pokemon } from '../../types/pokemon';
import { PokemonsList } from '../../components/PokemonsList';
import { Loader } from '../../components/Loader';
import { PokemonsBtns } from '../../components/PokemonsBtns';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const MyPokemonsPage: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);

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

    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts: string[]) => {
          getPokemonsOfUser(accounts[0])
            .then((res) => {
              const { data, total, results } = res;

              setPokemons(data.pokemons);
              if (!maxPages) {
                setMaxPages(Math.ceil(total / results));
              }
            })
            .catch((error) => window.alert(error.message))
            .finally(() => setIsLoading(false));
        });
    } else {
      setIsLoading(false);
    }
  }, [page]);

  return (
    <main className="user-pokemons-page">
      <div className="container">
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            <PokemonsList pokemons={pokemons} />
            {maxPages > 1 && (
              <PokemonsBtns
                page={page}
                maxPages={maxPages}
                updatePage={handlePage}
              />
            )}
          </>
        )}
      </div>
    </main>
  );
};
