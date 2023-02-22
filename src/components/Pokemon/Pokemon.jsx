import React from "react";
import { NavLink } from "react-router-dom";
import "./Pokemon.css"
import blackHeart from "../../resources/icons/blackHeart.png"

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
                    <div><h2>#{pokemon.id}{pokemon.name}</h2></div>
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
                <div className="pokemon_fav">{blackHeart}</div>
                {/*
                <NavLink 
                    className="navlink_item" 
                    to="/details" 
                    pokemon={pokemon} 
                    key={pokemon.name}
                >
                    ver detalles                    
                </NavLink> 
                */}  
            </div>                   
        </div>
    )
}

export default Pokemon