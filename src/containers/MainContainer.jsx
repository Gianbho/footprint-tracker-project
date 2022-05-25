import React, {useEffect, useState} from 'react'
import SearchInput from '../components/SearchInput'
import SearchButton from '../components/SearchButton';
import SwitchAirportsButton from '../components/SwitchAirportsButton';
import RoundTripButton from '../components/RoundTripButton';
import PassengersButton from '../components/PassengersButton';
import ResultsDiv from '../components/ResultsDiv';
import { fetchFlightFootprints } from '../client_API/APIcalls';

const MainContainer = ({airports}) => {

    const [saveAirports, setSaveAirports] = useState([]);
    const [startingAirport, setStartingAirport] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('');
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    const [passengers, setPassengers] = useState(0);

    const [tripDatas, setTripDatas] = useState({});

    useEffect(() => {
      fetchFlightFootprints(saveAirports[0], saveAirports[1], passengers);
      setTripDatas({
        startingAirport: startingAirport,
        arrivalAirport: arrivalAirport,
        isRoundTrip: isRoundTrip,
        passengers: passengers,
      });
    }, [saveAirports]);

  return (
      <div className='h-screen w-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center h-3/4'>
          <div className='flex flex-row justify-center'>
              <div className='w-1/2 m-0 flex'>
                <SearchInput airports={airports} searchAirport={startingAirport} setSearchAirport={setStartingAirport} position={'left'} ulId={1} />
              </div>
              <div className='absolute z-10'>
                <SwitchAirportsButton startingAirport={startingAirport} setStartingAirport={setStartingAirport} arrivalAirport={arrivalAirport} setArrivalAirport={setArrivalAirport} />
              </div>
              <div className='w-1/2 m-0 flex'>
                <SearchInput airports={airports} searchAirport={arrivalAirport} setSearchAirport={setArrivalAirport} position={'right'} ulId={2} />
              </div>
          </div>
          <div className='w-full md:w-[700px] flex flex-row justify-around mt-10'>
            <RoundTripButton isRoundTrip={isRoundTrip} setIsRoundTrip={setIsRoundTrip} />
            <PassengersButton passengers={passengers} setPassengers={setPassengers} />
          </div>
          <div className='mt-20'>
            <SearchButton saveAirports={saveAirports} setSaveAirports={setSaveAirports} startingAirport={startingAirport} arrivalAirport={arrivalAirport} isRoundTrip={isRoundTrip} />
          </div>
        </div>
        <div className='flex justify-center w-full h-1/4 items-end overflow:hidden'>
          <ResultsDiv tripDatas={tripDatas} />
        </div>
      </div>
  )
}

export default MainContainer