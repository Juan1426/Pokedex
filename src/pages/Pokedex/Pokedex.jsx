import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemons, getPokemonData, searchPokemon } from '../../api';

import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';


const Pokedex = () =>{  
  //#STATES
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState([])
  const [pokemon, setPokemon] = useState()
    
  //#SEARCHER
  //capturo la busqueda
  const onChange = (e) => {
      setSearch(e.target.value)  
      console.log(e.target.value)
  }
  //metodo de filtrado


  //#OFFSET
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
      <form className="searchbar">
        <div className="form-group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-search"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
           <input 
          type='text'
          className="searcher"
          value={search}
          placeholder="Buscar pokemon..."
          onChange={onChange}
        />
        </div>
            {/*<button onClick={onClick} className="btn-search">Buscar</button>*/}                     
      </form>
        
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
                        <PokemonCard pokemon={pokemon} key={pokemon.name} />                        
                    )
                })
            }             
        </div> 
        }
    </main>
  )
}

export default Pokedex