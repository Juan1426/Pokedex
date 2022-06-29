import React from "react";
import { useState } from "react";
import { searchPokemon } from "../../api";

const Searchbar = () => {

    const [search, setSearch] = useState("")
    const [pokemon, setPokemon] = useState()
    
    const onChange = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)  
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search)
        setPokemon(data)
    }

    return(
        <section>
            <div>
                <input 
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
                <div>Nombre :{pokemon.weight}</div>               
            </div>
            }
           </div>
            
        </section>
    )
}

export default Searchbar