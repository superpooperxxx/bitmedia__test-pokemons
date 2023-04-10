import React, { useState } from 'react';
import { Pokemon } from '../../types/pokemon';
import { capitalize } from '../../utils/capitalize';
import { signMessage as sign } from '../../utils/signMessage';
import { addPokemonToUser } from '../../api/userPokemons';
import { PokemonDetailsMetamask } from './PokemonDetailsMetamask';

interface Props {
  pokemon: Pokemon;
  closeModal: () => void;
}

const detailsToShow: (keyof Pokemon)[] = ['type', 'level', 'abilities'];

export const PokemonDetailsText: React.FC<Props> = ({
  pokemon,
  closeModal,
}) => {
  const [isSigning, setIsSigning] = useState(false);

  const signMessage = async (message: string, pokemonId: string) => {
    setIsSigning(true);
    const signature = await sign(message);

    if (signature) {
      const data = {
        pokemonId,
        signedMessage: signature,
      };

      addPokemonToUser(data)
        .then((res) => window.console.log(res))
        .catch((err) => window.console.log(err));
    }

    closeModal();
  };

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
        signMessage={signMessage}
        pokemon={pokemon}
      />
    </div>
  );
};
