import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Form, FormControl } from "react-bootstrap";


const Poke2 = () => {

    const parametros = useParams()
    
    const [pokemon, setPokemon] = useState({})
    const [busqueda, setBusqueda] = useState("")
    const [id, setId] = useState(1)

    const handleSiguiente = () =>{
        setId(id + 1)
    }

    const handleInputChange = (e) =>{
        setBusqueda(e.target.value)
    
    }

    const handleBuscar = (e) => {
        e.preventDefault()
        fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
            .then(resp => resp.json())
            .then( data => {
                setPokemon({
                    nombre : data.name,
                    imagen : data.sprites.front_default,
                    peso : data.weight
                })
            })
        console.log(busqueda)
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(resp => resp.json())
            .then(data => {
                setPokemon({
                    //seteo los datos recibidos de la api(data), al estado solo le mando lo que seteo
                    nombre : data.name,
                    imagen : data.sprites.front_default,
                    peso : data.weight
                })
                
            }) 
    }, [id])

    return (
        <div className="container-fluid">
            <h2>Poke2</h2>
            <hr />
            <Form onSubmit={handleBuscar}>
                <FormControl 
                    type = "text"
                    value= {busqueda}
                    onChange = {handleInputChange}
                    placeholder = "Buscar Pokemon..."
                />
                <button type="submit">
                    Buscar
                </button>
            </Form>
            <br />

            <button className="btn btn-primary" onClick={handleSiguiente}>
                siguiente
            </button>

            <h3>{pokemon.nombre}</h3>
            <img src={pokemon.imagen} alt={pokemon.nombre} />
            <small>{pokemon.peso}</small>
        </div>
    )
}

export default Poke2

