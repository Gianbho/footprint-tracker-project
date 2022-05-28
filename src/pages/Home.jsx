import React, {useState, useEffect} from 'react'

import { fetchAirports } from '../client_API/APIcalls';
import MainContainer from '../containers/MainContainer';

const Home = () => {

    const [airports, setAirports] = useState([]);

    useEffect(() => {
      fetchAirports(setAirports);
    }, [])
  
    return (
      <div className='flex flex-wrap justify-center overflow-hidden h-screen w-screen bg-gradient-to-b from-myBlue via-gray-100 to-gray-200'>
        <div className=''>
          <MainContainer airports={airports} />
        </div>
      </div>
    );
  }

export default Home