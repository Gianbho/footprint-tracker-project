import React, {useEffect, useState} from 'react'
import { SearchInput, SearchButton, RoundTripButton, PassengersButton, ClassButton, SwitchAirportsButton, ResultsDiv } from '../components';
import { fetchFlightFootprints } from '../client_API/APIcalls';

const MainContainer = ({airports}) => {

    const [saveAirports, setSaveAirports] = useState([]);
    const [startingAirport, setStartingAirport] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('');
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    const [passengers, setPassengers] = useState(1);
    const [isFooterOpen, setIsFooterOpen] = useState(false);
    const [myFlightClass, setMyFlightClass] = useState('');
    const [fetchResults, setFetchResults] = useState({});

    const [tripDatas, setTripDatas] = useState({});

    useEffect(() => {
      fetchFlightFootprints(saveAirports[0], saveAirports[1], passengers, myFlightClass, setFetchResults);
      setTripDatas({
        startingAirport: startingAirport,
        arrivalAirport: arrivalAirport,
        isRoundTrip: isRoundTrip,
        passengers: passengers,
        myFlightClass: myFlightClass,
        isFooterOpen: isFooterOpen,
      });
    }, [saveAirports, isRoundTrip, startingAirport, arrivalAirport, passengers, myFlightClass]);

  return (
      <div className='h-screen w-full flex flex-col items-center justify-center overflow-hidden'>
        <div className='flex flex-col items-center justify-center h-3/4'>
          <section className='flex flex-row justify-center'>
              <div className='w-1/2 m-0 flex'>
                <SearchInput airports={airports} searchAirport={startingAirport} setSearchAirport={setStartingAirport} position={'left'} ulId={1} isFooterOpen={isFooterOpen} setIsFooterOpen={setIsFooterOpen} />
              </div>
              <div className='absolute z-10'>
                <SwitchAirportsButton startingAirport={startingAirport} setStartingAirport={setStartingAirport} arrivalAirport={arrivalAirport} setArrivalAirport={setArrivalAirport} />
              </div>
              <div className='w-1/2 m-0 flex'>
                <SearchInput airports={airports} searchAirport={arrivalAirport} setSearchAirport={setArrivalAirport} position={'right'} ulId={2} isFooterOpen={isFooterOpen} setIsFooterOpen={setIsFooterOpen} />
              </div>
          </section>
          <section id='flightOptions' className='w-full md:w-[700px] flex flex-col items-center mt-10'>
            <div className='flex flex-row justify-around w-full'>
              <div className='flex flex-col items-center'>
                <h4 className='text-align-center'>Round trip: {isRoundTrip ? 'Yes' : 'No'}</h4>
                <RoundTripButton isRoundTrip={isRoundTrip} setIsRoundTrip={setIsRoundTrip} setIsFooterOpen={setIsFooterOpen} />
              </div>
              <div className='flex flex-col items-center'>
                <h4>Passengers</h4>
                <PassengersButton passengers={passengers} setPassengers={setPassengers} setIsFooterOpen={setIsFooterOpen} />
              </div>
            </div>
            <ClassButton myFlightClass={myFlightClass} setMyFlightClass={setMyFlightClass} />
          </section>
          <div className='mt-10 z-10'>
            <SearchButton saveAirports={saveAirports} setSaveAirports={setSaveAirports} startingAirport={startingAirport} arrivalAirport={arrivalAirport} isRoundTrip={isRoundTrip} isFooterOpen={isFooterOpen} setIsFooterOpen={setIsFooterOpen} />
          </div>
        </div>
          <ResultsDiv tripDatas={tripDatas} isFooterOpen={isFooterOpen} setIsFooterOpen={setIsFooterOpen} fetchResults={fetchResults} />
      </div>
  )
}

export default MainContainer