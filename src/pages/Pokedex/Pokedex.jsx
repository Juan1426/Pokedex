import React, { useState, useEffect } from 'react';
import { getPokemons, getPokemonData } from '../../api';

import Pokemon from "../../components/Pokemon/Pokemon";
import Loading from '../Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import "./Pokedex.css"

const Pokedex = () =>{

    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState()
    const [total, setTotal] = useState()
    const [loading, setLoading] = useState(true)
  
    const fetchPokemons = async () => {
      try{
        const data = await getPokemons()    
        const promises = data.results.map( async(pokemon) => {
          return await getPokemonData(pokemon.url)
        })
        const results = await Promise.all(promises)
        setPokemons(results)
        setLoading(false)
      } catch(err){}
    }
   
    useEffect(() => {   
      fetchPokemons()
    }, [])
    
    return(
        <section>
            <h2>Pokedex</h2>
            <section>
                <h3>Pagintation</h3>
                <Pagination 
                  page={1}
                  totalPages={100}
                />
                <div className="pokedex-grid">
                    {
                        pokemons.map((pokemon, idx) =>{
                            return (
                              loading ? <Loading />
                               :
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