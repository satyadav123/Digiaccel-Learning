import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './Component/Navbar.jsx'
import { Home } from './Component/Home.js'
import { SearchMovies } from './Component/SearchMovies.js';
import { Singlemovie } from './Component/Singlemovie';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>kk
        <Route path="/"
        element={<Home/>}>
        </Route>
        <Route path="/search" 
        element={<SearchMovies/>}>
        </Route>
        <Route path="/singlemovie/:id" 
        element={<Singlemovie />}>
        </Route>
        <Route path="/search/singlemovie/:id" 
        element={<Singlemovie />}>
        </Route>
      </Routes>
 
    </div>
  );
}

export default App;
