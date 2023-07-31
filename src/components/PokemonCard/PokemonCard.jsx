import React from "react";
import { Link } from "react-router-dom";

 const PokemonCard = ({ pokemon }) => {

    return(      
        <div className="pokemon-card">    
            <Link to={`/pokemon/${pokemon.name}`}>       
                <img 
                    src={pokemon.sprites.front_default} 
                    alt={`Pokemon ${pokemon.name}`} 
                    className="pokemon-img"
                />        
            </Link>            
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