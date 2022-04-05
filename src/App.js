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
          <Route path='/*' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/search' element={<SearchPage />}/>
        </Routes>

        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
