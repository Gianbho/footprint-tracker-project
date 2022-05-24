import React, {useState, useEffect} from 'react'

import { fetchAirports, fetchFlightFootprints } from '../client_API/APIcalls';
import SearchInput from '../components/SearchInput';
import MainContainer from '../containers/MainContainer';

const Home = () => {

    const [airports, setAirports] = useState([]);

    useEffect(() => {
      fetchAirports(setAirports);
      fetchFlightFootprints();
    }, [])
  
    return (
      <div className='flex flex-col w-screen md:w-[700px] md:m-[0 auto] h-screen'>
        <div className='bg-gradient-to-b from-myGreen via-myGreen to-green-200 h-1/3'>
        </div>
        <div className='absolute top-7/25 left-0 right-0'>
          <MainContainer airports={airports} />
        </div>
        <div className='h-3/4 bg-gray-200'>
        </div>
      </div>
    );
  }

export default Home