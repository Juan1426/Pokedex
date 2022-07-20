import React, { useState, useEffect } from 'react';
import { getPokemons, getPokemonData } from '../../api';

import Pokemon from "../../components/Pokemon/Pokemon";
import Loading from '../Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';

import "./Pokedex.css"

const Pokedex = () =>{

    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState()
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
  
    const fetchPokemons = async () => {
      try{
        const data = await getPokemons(25, 25*page)    
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
    
    const lastPage =()=> {
      const nextPage = Math.max(page, 0)
      setPage(nextPage)
    }

    const nextPage =()=> {
      const nextPage = Math.min(page, total)
      setPage(nextPage)
    }
    
    return(
        <section>
            <h2>Pokedex</h2>
            <section>
                <h3>Pagintation</h3>
                <Pagination 
                  page={page + 1}
                  totalPages={100}
                  onLeftClick = {lastPage}
                  onRightClick = {nextPage}
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