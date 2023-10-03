import HomePage from './pages/Home.js'
import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Merch from './pages/MerchPage.js'


function App() {
  return (
      <div className='App'>
          <Routes>
              
              <Route path='/' element={<HomePage />} />
              <Route path='/Merch' element={<Merch />} />

         
          </Routes>
      </div>
  );
}

export default App;
// Log to console
console.log('Hello console')