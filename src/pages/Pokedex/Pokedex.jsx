import {React, useContext } from 'react';
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import { PokemonContext } from '../../contexts/PokemonContext';

const Pokedex = () =>{  

  const {page, total, lastPage, loading, pokemons, nextPage} = useContext(PokemonContext)

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