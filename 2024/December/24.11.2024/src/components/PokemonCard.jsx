import { useState, useEffect } from "react";
import axios from "axios";

const PokemonCard = ({pokemon}) => {
    const [pokemonData , setPokemonData] = useState({})
console.log(pokemon);

    if (pokemonData.name) {
        console.log(pokemonData.sprites.front_default);
    }
    
    const fetchPokemon = async ()  =>{
        const {data} = await axios.get(pokemon.url)
        // console.log(data)
        setPokemonData(data)
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    return (
        <div>
            <h1>{pokemon.name}</h1>
            {/* <p>{pokemon.url}</p> */}
            <img src={pokemonData.sprites.front_default} alt="" />
        </div>
    )
}

export default PokemonCard