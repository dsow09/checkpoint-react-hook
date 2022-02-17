import './App.css';
import React from 'react';
import MovieCard from './Component/MovieCard';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Detail from './Component/Detail';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieCard/>}></Route>
          <Route path='/detail/:movieId' element={<Detail/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
