import React from "react";

import Pokemon from "../../components/Pokemon/Pokemon";

import "./Pokedex.css"

const Pokedex = (props) =>{
    const pokemons = props.pokemons
    return(
        <section>
            <h2>Pokedex</h2>
            <section>
                <h3>Pagintation</h3>
                <div className="pokedex_grid">
                    {
                        pokemons.map((pokemon, idx) =>{
                            return (
                                <Pokemon pokemon={pokemon} key={pokemon.name} />
                            )
                        })
                    }
                </div> 
            </section>
        </section>
    )
}

export default Pokedex