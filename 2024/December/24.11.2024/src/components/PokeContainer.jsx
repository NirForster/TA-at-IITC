import { useState, useEffect } from "react";
import axios from "axios";

const PokeContainer = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    setPokemons(data.results)
  }

  useEffect(() => {
      fetchPokemons()
  }, [])

  console.log(pokemons);
  
  return <h1>This is Pokemons Container</h1>;
};

export default PokeContainer;
