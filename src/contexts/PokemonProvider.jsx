import { PokemonContext } from "./PokemonContext"
import { getAllPokemons, getPokemonData, getPokemonById } from "../api"
import { React, useState} from "react"

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([])
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")


  //Funcion para llamar todos los pokemons
  const fetchAllPokemons = async () => {
    try {
      setLoading(true)
      const data = await getAllPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setAllPokemons(results)
      setLoading(false)
    } catch (err) { }
  }

  //Funcion para pedir los datos de un solo Pokemon


  return (
    <PokemonContext.Provider value={{
      fetchAllPokemons,
      setSearch,    
      allPokemons, 
      loading,
      search,
      setLoading,
      pokemon, 
      setPokemon
    }}>
      {children}
    </PokemonContext.Provider>
  )
}