import React, {useContext, useEffect} from "react";
import Loading from "../../components/Loading/Loading";
import { PokemonContext } from '../../contexts/PokemonContext';
import { useParams } from "react-router-dom";


export const PokemonDetail = () => {

    const{fetchPokemonByName, pokemon, setPokemon, loading, setLoading} = useContext(PokemonContext)

    const { name } = useParams
    const fetchPokemon = async name => {
        const data = await fetchPokemonByName(name);
        setPokemon(data);
        setLoading(false)
    }

    useEffect(()=> {
        fetchPokemon(name)
    }, []);

    return (
        <main>
            {loading
                ? <Loading/>
                : <section>
                    <div>{pokemon.name}</div>    
                </section>
            }
        </main>
    )
}

