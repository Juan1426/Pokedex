import React from "react";
import { useState } from "react";
import { searchPokemon } from "../../api";
import "./Searchbar.scss"

const Searchbar = () => {

    const [search, setSearch] = useState("")
    const [pokemon, setPokemon] = useState()
    
    const onChange = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)  
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search)
        console.log(data)
        setPokemon(data)
    }

    return(
        <section className="searchbar">
            <div>
                <input 
                    className="searcher"
                    placeholder="Buscar pokemon..."
                    onChange={onChange}
                />
            </div>
            <div>
                <button onClick={onClick}>Buscar</button>
            </div>
           <div>
            
            {pokemon &&
            <div>
                <div>Nombre: {pokemon.name}</div>       
                <div>Peso: {pokemon.weight} kg</div>        
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            }
           </div>
            
        </section>
    )
}

export default Searchbar