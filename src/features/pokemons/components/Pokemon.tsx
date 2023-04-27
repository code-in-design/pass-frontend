import { pokemonsApi } from '../pokemonsApi';

interface PokemonProps {
  speciesName: string;
  imageUrl: string;
  imageAlt: string;
}

export const Pokemon = (props: PokemonProps) => {
  const { speciesName, imageUrl, imageAlt } = props;
  return (
    <>
      <h3>{speciesName}</h3>
      <img src={imageUrl} alt={imageAlt} />
    </>
  );
};
