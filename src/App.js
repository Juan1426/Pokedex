import {React} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PokemonProvider } from './contexts/PokemonProvider';
import './App.css';
import Pokedex from './pages/Pokedex/Pokedex';
import {PokemonDetail} from './pages/PokemonDetail/PokemonDetail';

import Navbar from './components/Navbar/Navbar'

import "./styles/styles.scss"

export default function App() {
  
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Navbar />     
        <Routes>       
          <Route element={<Pokedex />} path="/" />
          <Route element={<PokemonDetail />} path="/pokemon/:id" />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}


