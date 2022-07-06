import React from "react";

const Pokemon = (props) => {
    
    const pokemon = props.pokemon

    return(
        <div className="pokemon-card">
            <div className="pokemon-img">
                <img 
                    src={pokemon.sprites.font_default} 
                    alt={pokemon.name} 
                />
            </div>
            <div>
                <div>
                    <div><h2>{pokemon.name}</h2></div>
                    <div><h5>#{pokemon.id}</h5></div>
                </div>
            </div>           
        </div>
    )
}

export default Pokemon