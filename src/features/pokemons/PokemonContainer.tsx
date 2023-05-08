import React from 'react';
import { Pokemon } from './components/Pokemon';
import { pokemonsApi } from './pokemonsApi';

export interface PokemonContainerProps {
  name: string;
  pollingInterval: number;
}

const PokemonContainer = ({ name, pollingInterval }: PokemonContainerProps) => {
  const { data, error, isLoading, isFetching } = pokemonsApi.useGetPokemonByNameQuery(name, { pollingInterval });
  const speciesName = `${data.species.name} ${isFetching ? '...' : ''}`;
  const imageUrl = data.sprites.front_shiny;

  if (error) return <>Oh no, there was an error</>;
  if (isLoading) return <>Loading...</>;

  return <Pokemon speciesName={speciesName} imageUrl={imageUrl} imageAlt={speciesName} />;
};

export default PokemonContainer;
