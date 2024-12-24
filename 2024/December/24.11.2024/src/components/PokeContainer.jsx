import { useState, useEffect } from "react";
import axios from "axios";

// Components
import PokemonCard from "./PokemonCard";

const PokeContainer = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    setPokemons(data.results);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  console.log(pokemons);

  return (
    <>
      <h1>This is Pokemons Container</h1>
      <ul>
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />
        })}
      </ul>
    </>
  );
};

export default PokeContainer;
