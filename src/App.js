
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pokedex from './pages/Pokedex/Pokedex';
import PokedexList from './pages/PokedexList/PokedexList';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';

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
        <Route element={<PokedexList />} path="/list" />
        <Route element={<PokemonDetail/>} path="/details" />
      </Routes>
    </BrowserRouter>
  );
}


