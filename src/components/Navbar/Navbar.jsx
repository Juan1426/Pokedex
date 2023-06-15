import {React, useContext} from "react";
import { NavLink } from "react-router-dom";
import { PokemonContext } from '../../contexts/PokemonContext';

const Navbar = () =>{

  const {onChange, search} = useContext(PokemonContext)

    return(
      <>
        <header className="header_container">
          <div className="logo">
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo Pokemon" />
          </div>
          <form className="searchbar">
            <div className="form-group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon-search"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
              </svg>
              <input 
                type='text'
                className="searcher"
                value={search}
                placeholder="Buscar pokemon..."
                onChange={onChange}
              />
            </div>           
          </form>            
        </header>
      </>
    )
}

export default Navbar