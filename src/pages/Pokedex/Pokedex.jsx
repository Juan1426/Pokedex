import React, { useState, useEffect } from 'react';
import { getPokemons, getPokemonData } from '../../api';

import Pokemon from "../../components/Pokemon/Pokemon";
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';

import "./Pokedex.css"

const Pokedex = () =>{

    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(0)
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
  
    const fetchPokemons = async () => {
      try{
        setLoading(true)
        const data = await getPokemons(20, 20*page)    
        const promises = data.results.map( async(pokemon) => {
          return await getPokemonData(pokemon.url)
        })
        const results = await Promise.all(promises)
        setPokemons(results)
        setLoading(false)
        setTotal(Math.ceil(data.count /20))
      } catch(err){}
    }
   
    useEffect(() => {   
      fetchPokemons()
    }, [page])
    
    const lastPage =()=> {
      const nextPage = Math.max(page - 1, 0)
      setPage(nextPage)
    }

    const nextPage =()=> {
      const nextPage = Math.min(page + 1, total)
      setPage(nextPage)
    }
    
    return(
        <section>
            <h2>Pokedex</h2>
            <section>
                <h3>Pagintation</h3>
                <Pagination 
                  page={page + 1}
                  totalPages={total}
                  onLeftClick = {lastPage}
                  onRightClick = {nextPage}
                />
                { loading 
                  ? <Loading />
                  : <div className="pokedex-grid">
                    {
                        pokemons.map((pokemon, idx) =>{
                            return (
                                <Pokemon pokemon={pokemon} key={pokemon.name} />                        
                            )
                        })
                    }             
                </div> 
                }
            </section>
        </section>
    )
}

export default Pokedex