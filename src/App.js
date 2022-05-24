import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Home from './pages/Home';

function App() {
  return(
    <div className='flex justify-center'>
    <Home />
    </div>
  )
}

export default App;
