import React from "react";

import "./Pokemon.css"

const Pokemon = (props) => {
    
    const pokemon = props.pokemon

    return(
        <div className="pokemon-card">        
            <div className="pokemon-img-container">
                <img 
                    src={pokemon.sprites.front_default} 
                    alt={pokemon.name} 
                    className="pokemon-img"
                />
            </div>
           
            <div className="card-body">
                <div className="card-top">
                    <div><h2>{pokemon.name}</h2></div>
                    <div><h5>#{pokemon.id}</h5></div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
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
        </div>
    )
}

export default Pokemon