import { PokemonContext } from "./PokemonContext"
import { getPokemons, getAllPokemons, getPokemonData, getPokemonByName } from "../api"
import { React, useState, useEffect } from "react"

export const PokemonProvider = ({ children }) => {
  //api
  const [allPokemons, setAllPokemons] = useState([])
  const [pokemon, setPokemon] = useState([])
  //loading
  const [loading, setLoading] = useState(false)
  //buscador
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
  const fetchPokemonName = async () => {
    try {
      setLoading(true)
      const data = await getPokemonByName()
    } catch (err) { }
  }

  return (
    <PokemonContext.Provider value={{
      fetchAllPokemons,
      fetchPokemonName,
      setSearch,    
      allPokemons, 
      loading,
      search,
      setLoading
    }}>
      {children}
    </PokemonContext.Provider>
  )
}