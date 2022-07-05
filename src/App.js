import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pokedex from './pages/Pokedex/Pokedex';
import PokedexList from './pages/PokedexList/PokedexList';

import Navbar from './components/Navbar/Navbar'
import Searchbar from './components/Searchbar/Searchbar';

import './App.css';

const {useState, useEffect} = 

function App() {

  useEffect(() => {
    console.log("useEffect funciona")
  }, [])

  return (
    <BrowserRouter>

      <Navbar />    
      <Searchbar /> 

      <Routes>
        <Route element={<Pokedex />} path="/" />
        <Route element={<PokedexList />} path="/list" />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
