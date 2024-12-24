const PokemonCard = ({pokemon}) => {
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <p>{pokemon.url}</p>
        </div>
    )
}

export default PokemonCard