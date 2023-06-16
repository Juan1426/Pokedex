import { React, useContext, useState, useEffect } from 'react';
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import { PokemonContext } from '../../contexts/PokemonContext';
import { getPokemonData, getPokemons } from '../../api';

const Pokedex = () =>{  
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const{ search, loading, setLoading } = useContext(PokemonContext)

  const fetchPokemons = async () => {
    setLoading(true)
    let promises 
    let data
    try {
      if (!search) {
        data = await getPokemons(20, 20 * page)
        promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url)
        })
      } else {
        data = await getPokemons(20, 20 * page)
        promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url)
        })
      }
    } catch (err) {console.log(err)}
    const results = await Promise.all(promises)
    setPokemons(results)
    setLoading(false)
    setTotal(Math.ceil(data.count / 20))
  }

  useEffect(() => {
    fetchPokemons()
  }, [page, search])

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0)
    setPage(nextPage)
  }
  const nextPage = () => {
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
          <p>{search}</p>
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