import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type pokemonType = {
  name: string;
  sprites: {
    front_default: string;
  };
};

export const PokeFav = () => {
  const [pokemon, setPokemon] = useState<pokemonType | null>();
  let { id } = useParams();
  const pokeUrlGet = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetch(pokeUrlGet);
        if (!response.ok) {
          throw new Error("algo salio mal");
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPokemon();
  }, [pokeUrlGet]);

  return (
    <div>
      <span> name: {pokemon?.name}</span>
      {""}
      <img src={pokemon?.sprites.front_default} alt="asdas" />
    </div>
  );
};
