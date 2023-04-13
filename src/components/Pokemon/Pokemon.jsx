import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import FavouriteContext from "../../contexts/favouriteContext";
import "./Pokemon.scss"


const Pokemon = (props) => {
    
    const pokemon = props.pokemon
    const {favouritePokemons} = useContext(FavouriteContext);

    const blackHearh = "🖤";
    const greenHearh = "💚";

    const heart = favouritePokemons.includes(pokemon.name)? greenHearh : blackHearh;
    
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
                    <div><h2>#{pokemon.id} {pokemon.name}</h2></div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((types, ind) => {
                            return(
                            <div key={ind}>
                                <h4 className="pokemon-type">{types.type.name}</h4>
                                </div>
                            )
                        })}
                    </div>
                    <button>
                        <div className="pokemon-favourite">{heart}</div>
                    </button>
                </div>
            </div>                   
        </div>
    )
}

export default Pokemon