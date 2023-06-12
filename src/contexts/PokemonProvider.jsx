import { PokemonContext } from "./PokemonContext"
import { getPokemons, getAllPokemons, getPokemonData, getPokemonByName } from "../api"
import { useState, useContext, useEffect } from "react"

export const PokemonProvider = ({children}) => {
  const [pokemons, setPokemons] = useState([])
  const [allPokemons, setAllPokemons] = useState([])
  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  //Funcion para llamar 20 pokemons 
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
      setTotal(Math.ceil(data.count/20))
    }catch(err){}
  }   
//Funcion para llamar todos los pokemons
  const fetchAllPokemons = async() => {
    try{
      setLoading(true)
      const data = await getAllPokemons()    
      const promises = data.results.map( async(pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setAllPokemons(results)
      setLoading(false)
    }catch(err){}
  }
//Funcion para pedir los datos de un solo Pokemon
  const fetchPokemonId = async() => {
    try{    
      setLoading(true)
      const data = await getPokemonByName()

    }catch(err){}
  }
  //
  useEffect(()=> {
    fetchPokemons()
  }, [])

  useEffect(() =>{
    fetchAllPokemons()
  },[])

    return(
        <PokemonContext.Provider value={{number:1}}>
            {children}
        </PokemonContext.Provider>
    )
}