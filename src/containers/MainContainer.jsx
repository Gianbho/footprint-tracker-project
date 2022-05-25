import React, {useEffect, useState} from 'react'
import SearchInput from '../components/SearchInput'
import SearchButton from '../components/SearchButton';
import SwitchAirportsButton from '../components/SwitchAirportsButton';
import RoundTripButton from '../components/RoundTripButton';
import PassengersButton from '../components/PassengersButton';
import { fetchFlightFootprints } from '../client_API/APIcalls';

const MainContainer = ({airports}) => {

    const [saveAirports, setSaveAirports] = useState([]);
    const [startingAirport, setStartingAirport] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('');
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    const [passengers, setPassengers] = useState(0);

    useEffect(() => {
      fetchFlightFootprints(saveAirports[0], saveAirports[1], passengers)
    }, [saveAirports]);

  return (
      <div className='w-full flex flex-col items-center align-center'>
        <div className='relative bottom-6 flex flex-row justify-center'>
            <div className='w-1/2 m-0 flex justify-end'>
               <SearchInput airports={airports} searchAirport={startingAirport} setSearchAirport={setStartingAirport} position={'left'} ulId={1} />
            </div>
            <div className='absolute z-10'>
               <SwitchAirportsButton startingAirport={startingAirport} setStartingAirport={setStartingAirport} arrivalAirport={arrivalAirport} setArrivalAirport={setArrivalAirport} />
            </div>
            <div className='w-1/2 m-0 flex justify-around'>
               <SearchInput airports={airports} searchAirport={arrivalAirport} setSearchAirport={setArrivalAirport} position={'right'} ulId={2} />
            </div>
        </div>
        <div className='w-full md:w-[700px] flex flex-row justify-around'>
          <RoundTripButton isRoundTrip={isRoundTrip} setIsRoundTrip={setIsRoundTrip} />
          <PassengersButton passengers={passengers} setPassengers={setPassengers} />
        </div>
        <div className='mt-20'>
           <SearchButton saveAirports={saveAirports} setSaveAirports={setSaveAirports} startingAirport={startingAirport} arrivalAirport={arrivalAirport} isRoundTrip={isRoundTrip} />
        </div>
      </div>
  )
}

export default MainContainer