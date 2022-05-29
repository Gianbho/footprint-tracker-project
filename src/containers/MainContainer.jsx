import React, {useEffect, useState} from 'react'
import { SearchInput, SearchButton, RoundTripButton, PassengersButton, ClassButton, SwitchAirportsButton, ResultsDiv, Header} from '../components';
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
      <div className='h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-plane-pattern'>
        <Header />
        <div className='flex flex-col items-center justify-start h-[85%] mt-2'>
          <section className='flex flex-row w-full h-[30%] justify-center items-center'>
              <div className='w-[40%] m-0 flex'>
                <SearchInput airports={airports} searchAirport={startingAirport} setSearchAirport={setStartingAirport} position={'left'} ulId={1} isFooterOpen={isFooterOpen} setIsFooterOpen={setIsFooterOpen} inputId={'startingInput'} />
              </div>
              <div className='absolute z-30'>
                <SwitchAirportsButton startingAirport={startingAirport} setStartingAirport={setStartingAirport} arrivalAirport={arrivalAirport} setArrivalAirport={setArrivalAirport} />
              </div>
              <div className='w-[40%] m-0 flex'>
                <SearchInput airports={airports} searchAirport={arrivalAirport} setSearchAirport={setArrivalAirport} position={'right'} ulId={2} isFooterOpen={isFooterOpen} setIsFooterOpen={setIsFooterOpen} inputId={'arrivalInput'} />
              </div>
          </section>
          <section id='flightOptions' className='w-full h-[40%] md:w-[700px] flex flex-col items-center'>
            <div className='flex flex-row justify-around w-full'>
                <RoundTripButton isRoundTrip={isRoundTrip} setIsRoundTrip={setIsRoundTrip} setIsFooterOpen={setIsFooterOpen} />
                <PassengersButton passengers={passengers} setPassengers={setPassengers} setIsFooterOpen={setIsFooterOpen} />
            </div>
            <ClassButton myFlightClass={myFlightClass} setMyFlightClass={setMyFlightClass} setIsFooterOpen={setIsFooterOpen} />
          </section>
          <div className='flex justify-center items-center h-1/5 w-full z-10'>
            <SearchButton saveAirports={saveAirports} setSaveAirports={setSaveAirports} startingAirport={startingAirport} arrivalAirport={arrivalAirport} isRoundTrip={isRoundTrip} isFooterOpen={isFooterOpen} setIsFooterOpen={setIsFooterOpen} passengers={passengers} />
          </div>
        </div>
          <ResultsDiv tripDatas={tripDatas} isFooterOpen={isFooterOpen} setIsFooterOpen={setIsFooterOpen} fetchResults={fetchResults} />
      </div>
  )
}

export default MainContainer