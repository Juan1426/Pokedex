import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pokedex from './pages/Pokedex/Pokedex';
import PokedexList from './pages/PokedexList/PokedexList';

import Header from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Header />    

      <Routes>
        <Route element={<Pokedex />} path="/" />
        <Route element={<PokedexList />} path="/list" />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
