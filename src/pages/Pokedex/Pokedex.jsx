import { React, useContext, useState, useEffect } from 'react';
import { Loading, Pagination, PokemonCard } from '../../components';
import { PokemonContext } from '../../contexts/PokemonContext';
import { getPokemonData, getPokemons, getAllPokemons} from '../../api';

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
        const results = await Promise.all(promises)    
        setPokemons(results)
      } else {  
        data = await getPokemons(20, 20 * page)
        promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url)        
        })
        const results = await Promise.all(promises)    
        const filt = results.filter((d)=>
        d.name.toLowerCase().includes(search.toLocaleLowerCase()))
        setPokemons(filt)

      }
    } catch (err) {console.log(err)}
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
    <main className='pokedex_main'>
      <div className='coso'>        
          <Pagination 
            page={page + 1}
            totalPages={total}
            onLeftClick = {lastPage}
            onRightClick = {nextPage}
          />
        </div>
        <div>
          {loading
            ?<Loading /> 
            :<div className="pokedex-grid">            
              {pokemons.map((pokemon, idx) =>{
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