//Get 20 Pokemons
export const getPokemons = async(limit=20, offset=0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        const data = await response.json();
        return data 
    } catch(err) {}
} 
//Get All Pokemons
export const getAllPokemons = async () => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
        const response = await fetch(url)
        const data = await response.json()
        return data
    }catch(err){}
    
}

export const searchPokemon = async(pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        const data = await response.json();
        return data
    } catch (err) {}
};
//
export const getPokemonData = async (url) => {
    try{
        const response = await fetch(url)
        const data = await response.json();
        return data
    }catch(err) {}
}