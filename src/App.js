import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Home from './pages/Home';

function App() {
  return(
    <div className='flex w-screen h-screen'>
     <Home />
    </div>
  )
}

export default App;
