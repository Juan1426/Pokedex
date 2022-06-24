import React from "react";
import { NavLink } from "react-router-dom";
import {Container, Nav, Navbar} from 'react-bootstrap';

const Header = () =>{
    return(
          <Nav className="me-auto">
            <NavLink to="/">Pokedex</NavLink>
            <NavLink to="/list">List</NavLink>         
          </Nav>


    )
}

export default Header