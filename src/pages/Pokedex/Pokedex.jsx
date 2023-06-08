import React, { useState, useEffect, useContext } from 'react';
import { getPokemonData } from '../../api';

import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import { PokemonContext } from '../../contexts/PokemonContext';

const Pokedex = () =>{  
  //#STATES
  
  const context = useContext(PokemonContext)

    //#PAGINATION
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
    <main>
      <div className='coso'>        
          <Pagination 
            page={page + 1}
            totalPages={total}
            onLeftClick = {lastPage}
            onRightClick = {nextPage}
          />
        </div>
        <div>
          <h2>hola {num}</h2>
        </div>
        <div>
          {loading?<Loading /> 
          :<div className="pokedex-grid">            
            {
              pokemons.map((pokemon, idx) =>{
                return (
                  <PokemonCard pokemon={pokemon} key={pokemon.name} />                        
                )
              })
            }             
          </div> 
          }
        </div>
    </main>
  )
}

export default Pokedex