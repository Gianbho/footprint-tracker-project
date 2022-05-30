import React, {useState, useEffect} from 'react'

import { fetchAirports } from '../client_API/APIcalls';
import MainContainer from '../containers/MainContainer';

const Home = () => {

    const [airports, setAirports] = useState([]);

    useEffect(() => {
      fetchAirports(setAirports);
    }, [])
  
    return (
      <div className='flex justify-center overflow-hidden min-h-[500px] h-screen w-full bg-gradient-to-b from-myBlue via-myBlue to-gray-200'>
        <div className=''>
          <MainContainer airports={airports} />
        </div>
      </div>
    );
  }

export default Home