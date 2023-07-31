import { PokemonContext } from "./PokemonContext"
import { getAllPokemons, getPokemonData, getPokemonById } from "../api"
import { React, useState} from "react"

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([])
  const [pokemon, setPokemon] = useState([])
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

  /*const fetchAllPokemons = async () => {
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
  }*/

  return (
    <PokemonContext.Provider value={{
      //fetchAllPokemons,
      setSearch,    
      allPokemons, 
      loading,
      search,
      setLoading,
      pokemon, 
      setPokemon,
      detail,
      setDetail
    }}>
      {children}
    </PokemonContext.Provider>
  )
}