import React, {useEffect, useState} from 'react'
import { SearchInput, SearchButton, RoundTripButton, PassengersButton, SwitchAirportsButton, ResultsDiv } from '../components';
import { fetchFlightFootprints } from '../client_API/APIcalls';

const MainContainer = ({airports}) => {

    const [saveAirports, setSaveAirports] = useState([]);
    const [startingAirport, setStartingAirport] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('');
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    const [passengers, setPassengers] = useState(0);
    const [isFooterOpen, setIsFooterOpen] = useState(false);


    const [tripDatas, setTripDatas] = useState({});

    useEffect(() => {
      fetchFlightFootprints(saveAirports[0], saveAirports[1], passengers);
      setTripDatas({
        startingAirport: startingAirport,
        arrivalAirport: arrivalAirport,
        isRoundTrip: isRoundTrip,
        passengers: passengers,
        isFooterOpen: isFooterOpen,
      });
    }, [saveAirports]);

  return (
      <div className='h-screen w-full flex flex-col items-center justify-center overflow-hidden'>
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
          <div className='mt-20 z-10'>
            <SearchButton saveAirports={saveAirports} setSaveAirports={setSaveAirports} startingAirport={startingAirport} arrivalAirport={arrivalAirport} isRoundTrip={isRoundTrip} isFooterOpen={isFooterOpen} setIsFooterOpen={setIsFooterOpen} />
          </div>
        </div>
          <ResultsDiv tripDatas={tripDatas} isFooterOpen={isFooterOpen} setIsFooterOpen={setIsFooterOpen} />
      </div>
  )
}

export default MainContainer