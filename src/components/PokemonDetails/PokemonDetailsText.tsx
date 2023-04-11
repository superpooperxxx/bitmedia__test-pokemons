/* eslint-disable no-alert */
import React, { useCallback, useContext, useState } from 'react';
import { Pokemon } from '../../types/pokemon';
import { capitalize } from '../../utils/capitalize';
import { signMessage as sign } from '../../utils/signMessage';
import {
  addPokemonToUser,
  evolveUserPokemon,
  getPokemonsOfUser,
} from '../../api/userPokemons';
import { PokemonDetailsMetamask } from './PokemonDetailsMetamask';
import { UserPokemonsContext } from '../../contexts/UserPokemonsProvider';

interface Props {
  pokemon: Pokemon;
  closeModal: () => void;
  evolutionPokemon: Pokemon | null;
}

const detailsToShow: (keyof Pokemon)[] = ['type', 'level', 'abilities'];

export const PokemonDetailsText: React.FC<Props> = ({
  pokemon,
  closeModal,
  evolutionPokemon,
}) => {
  const { setPokemons } = useContext(UserPokemonsContext);
  const [isSigning, setIsSigning] = useState(false);

  const addPokemon = useCallback(async (message: string) => {
    setIsSigning(true);
    const signature = await sign(message);

    if (signature) {
      const data = {
        pokemonId: pokemon.id,
        signedMessage: signature,
      };

      addPokemonToUser(data)
        .then(() => {
          window.alert('Pokemon was added to your list');
        })
        .catch(() => window.alert('User already has this pokemon'));
    }

    closeModal();
  }, []);

  const evolvePokemon = useCallback(async (message: string) => {
    setIsSigning(true);
    const signature = await sign(message);

    if (signature) {
      const data = {
        userPokemonsIDFrom: pokemon.id,
        userPokemonsIDto: pokemon.evolution[0],
        signedMessage: signature,
      };

      evolveUserPokemon(data)
        .then(() => {
          window.alert('Pokemon evolved!');

          window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((accounts: string[]) => {
              getPokemonsOfUser(accounts[0])
                .then((res) => {
                  const { data: apiData } = res;

                  setPokemons(apiData.pokemons);
                })
                .catch((error) => window.alert(error.message));
            });
        })
        .catch((error) => window.alert(error));
    }

    closeModal();
  }, []);

  const { name } = pokemon;

  return (
    <div className="pokemon-details__text">
      <h3 className="pokemon-details__name">{name}</h3>
      <ul className="pokemon-details__list">
        {detailsToShow.map((detail) => {
          let value = pokemon[detail];

          if (Array.isArray(value)) {
            value = value.join(', ');
          }

          return (
            <li
              className="pokemon-details__detail"
              key={detail}
            >
              {`${capitalize(detail)}: `}
              <span className="pokemon-details__value">{value}</span>
            </li>
          );
        })}
      </ul>

      <PokemonDetailsMetamask
        isSigning={isSigning}
        addPokemon={addPokemon}
        evolvePokemon={evolvePokemon}
        pokemon={pokemon}
        evolutionPokemon={evolutionPokemon}
      />
    </div>
  );
};
