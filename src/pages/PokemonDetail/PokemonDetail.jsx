import React, {useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { PokemonContext } from '../../contexts/PokemonContext';
import { getPokemonById } from "../../api";

export const PokemonDetail = () => {

    const{ pokemon, loading, setLoading, setPokemon} = useContext(PokemonContext)
    
    let { id } = useParams()

    const fetchPokemonById = async id =>{
        setLoading(true)
        const data = await getPokemonById(id)
        setPokemon(data)
        setLoading(false)
    }
        useEffect(() =>{
            fetchPokemonById(id)
        }, [])



    return (
        <main>
            {loading
                ?<Loading />
                :<section>
                    <h2>nombre: {pokemon.name}</h2>
                    <h3>peso: {pokemon.weight}</h3>
                    <h3>altura: {pokemon.height}</h3>
                    <h2>tipo</h2>
                    <div>                        
                        {/*pokemon.types.map((type) =>(
                            <span key={type.type.name} className={type.type.name}>
                                {type.type.name}
                            </span>
                        ))*/}
                    </div>
                    <h2>abilidades</h2>
                    <div>
                        {/*pokemon.abilities.map((ability)=>(
                            <span key={ability.ability.name}>
                                {ability.abiity.name}
                            </span>
                        ))*/}
                  </div>
                </section>
            }
        </main>
    )
}

