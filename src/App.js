import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pokedex from './pages/Pokedex/Pokedex';
import PokedexList from './pages/PokedexList/PokedexList';
import Navbar from './components/Navbar/Navbar'
import Searchbar from './components/Searchbar/Searchbar';

import { getPokemons } from './api';

import './App.css';

export default function App() {

  const[pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try{
      const data = await getPokemons()  
      setPokemons(data.results) 
    } catch(err){}
  }

  useEffect(() => {
    
    fetchPokemons()
  }, [])

  return (
    <BrowserRouter>
      <Navbar />    
      <Searchbar /> 
      <Routes>
        <Route element={<Pokedex pokemons={pokemons}/>} path="/" />
        <Route element={<PokedexList />} path="/list" />
      </Routes>
    </BrowserRouter>
  );
}


