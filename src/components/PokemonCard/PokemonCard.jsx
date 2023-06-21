import React from "react";
import { NavLink } from "react-router-dom";

 const PokemonCard = (props) => {

    const pokemon = props.pokemon

    return(      
        <div className="pokemon-card">    
            <NavLink to={"/details"}>       
                <img 
                    src={pokemon.sprites.other.dream_world.front_default} 
                    alt={`Pokemon ${pokemon.name}`} 
                    className="pokemon-img"
                />        
            </NavLink>            
            <div className="card-body">
                <div className="card-top">
                    <h2>{pokemon.name}</h2>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map( (type) =>(
                            <span key={type.type.name} className={type.type.name}>
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>                   
        </div>
    )
}

export default PokemonCard