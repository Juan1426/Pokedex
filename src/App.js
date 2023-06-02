import {React, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { FavouriteProvider } from './contexts/favouriteContext';
import Pokedex from './pages/Pokedex/Pokedex';
import PokedexList from './pages/PokedexList/PokedexList';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';

import Navbar from './components/Navbar/Navbar'

import "./styles/styles.scss"

export default function App() {
  
  const [favourites, setFavourites] = useState([]);
  
  const updateFavoritePokemons = (name) => {
    console.log(name);
  };

  return (
    <FavouriteProvider>
      <BrowserRouter>
        <Navbar />     
        <Routes>       
          <Route element={<Pokedex />} path="/" />
          <Route element={<Pokedex />} path="/category/:catId" />
          <Route element={<PokedexList />} path="/list" />
          <Route element={<PokemonDetail/>} path="/details" />
        </Routes>
      </BrowserRouter>
    </FavouriteProvider>
  );
}


