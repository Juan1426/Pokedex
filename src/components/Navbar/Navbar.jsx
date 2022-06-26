import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css"


const Header = () =>{
    return(
      <>
        <header className="main_container">
            <div className="logo_pokemon">
              <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo Pokemon" />
            </div>
            <nav className="me-auto">
              <NavLink className="navlink_item" to="/">Pokedex</NavLink>
              <NavLink className="navlink_item" to="/list">List</NavLink>         
            </nav>
        </header>
      </>
    )
}

export default Header