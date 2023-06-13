import { PokemonContext } from "./PokemonContext"

export const PokemonSearchProvider = ({children}) => {

    

    <PokemonContext.Provider value={{mensaje}}>
        {children}
    </PokemonContext.Provider>
}