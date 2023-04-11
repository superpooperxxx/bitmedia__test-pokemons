/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import './PokemonDetails.scss';
import { Pokemon } from '../../types/pokemon';
import { PokemonDetailsText } from './PokemonDetailsText';
import { PokemonDetailsClose } from './PokemonDetailsClose';
import { getPokemon } from '../../api/pokemons';
import { PokemonDetailsEvolution } from './PokemonDetailsEvolution';

interface Props {
  pokemon: Pokemon;
  closeModal: () => void;
}

export const PokemonDetails: React.FC<Props> = ({ pokemon, closeModal }) => {
  const [evolutionPokemon, setEvolutionPokemon] = useState<Pokemon | null>(
    null,
  );

  useEffect(() => {
    if (pokemon.evolution[0]) {
      getPokemon(pokemon.evolution[0])
        .then((res) => {
          setEvolutionPokemon(res.data.pokemon);
        })
        .catch(() => window.alert('Pokemon was not found'));
    }
  }, []);

  return (
    <div className="modal">
      <div className="container">
        <article className="pokemon-details">
          <PokemonDetailsClose closeModal={closeModal} />
          <div className="pokemon-details__evolutions">
            <PokemonDetailsEvolution
              name={pokemon.name}
              img={pokemon.imageUrl}
            />
            {evolutionPokemon && (
              <PokemonDetailsEvolution
                name={evolutionPokemon.name}
                img={evolutionPokemon.imageUrl}
              />
            )}
          </div>

          <PokemonDetailsText
            pokemon={pokemon}
            closeModal={closeModal}
            evolutionPokemon={evolutionPokemon}
          />
        </article>
      </div>
    </div>
  );
};
