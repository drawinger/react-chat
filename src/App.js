import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AuthPage, HomePage, SearchPage} from './components/pages/index'


function App() {
  return (
    <div>
      <header>
      </header>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/start' element={<div>Start page</div>}/>
          <Route path='/login' element={<AuthPage />} />
          <Route path='/signup' element={<AuthPage />} />

          <Route path='/*' element={<HomePage />} />


        </Routes>

        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
