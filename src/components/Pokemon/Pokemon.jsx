import React from "react";

const Pokemon = (props) => {
    
    const pokemon = props.pokemon

    return(
        <div className="pokemon-card">
            <div className="pokemon-img">
                <img 
                    src={pokemon.sprites.front_default} 
                    alt={pokemon.name} 
                />
            </div>
            <div>
                <div>
                    <div><h2>{pokemon.name}</h2></div>
                    <div><h5>#{pokemon.id}</h5></div>
                </div>
                <div>
                    {pokemon.types.map((types, ind) => {
                        return(
                        <div key={ind}>
                            <h4>{types.type.name}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>           
        </div>
    )
}

export default Pokemon