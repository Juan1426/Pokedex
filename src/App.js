import {React} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokemonProvider } from './contexts/PokemonProvider';
import './App.css';
import Pokedex from './pages/Pokedex/Pokedex';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';

import Navbar from './components/Navbar/Navbar'

import "./styles/styles.scss"

export default function App() {
  
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Navbar />     
        <Routes>       
          <Route element={<Pokedex />} path="/" />
          <Route element={<Pokedex />} path="/category/:catId" />
          <Route element={<PokemonDetail/>} path="/details" />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}


