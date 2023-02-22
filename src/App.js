import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pokedex from './pages/Pokedex/Pokedex';
import PokedexList from './pages/PokedexList/PokedexList';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';

import Poke2 from './pages/Pokedex2/Poke2';

import Navbar from './components/Navbar/Navbar'
import Searchbar from './components/Searchbar/Searchbar';



import './App.css';

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />    
      <Searchbar /> 
      <Routes>       
        <Route element={<Pokedex />} path="/" />
        <Route element={<Pokedex />} path="/category/:catId" />
        <Route element={<PokedexList />} path="/list" />
        <Route element={<Poke2/>} path="/poke2" />
        <Route element={<PokemonDetail/>} path="/details" />
      </Routes>
    </BrowserRouter>
  );
}


