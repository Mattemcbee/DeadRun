import HomePage from './pages/Home.js'
import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Merch from './pages/MerchPage.js'
import Show from './pages/ShowPage.js'
import Music from './pages/MusicPage.js'
import Contact from './pages/ContactPage.js'
// import Test from './pages/ColTest.js'

import Home from './pages/Home.js'


function App() {
  return (
      <div className='App' >
          <Routes>
              
              <Route path='/' element={<Home />} />
              <Route path='/Merch' element={<Merch />} />
              <Route path='/Show' element={<Show />} />
              <Route path='/Music' element={<Music />} />
              <Route path='/Contact' element={<Contact />} />
              {/* <Route path='/Test' element={<Test />} /> */}

         
          </Routes>
      </div>
  );
}

export default App;
// Log to console
console.log('Hello console')