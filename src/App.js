import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Home from './pages/Home';

function App() {
  return(
    <div className='flex w-screen md:w-[750px] md:my-0 md:mx-auto h-screen overflow-hidden'>
     <Home />
    </div>
  )
}

export default App;
