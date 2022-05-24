import React, {useState} from 'react'
import SearchInput from '../components/SearchInput'
import SearchButton from '../components/SearchButton';
import SwitchAirportsButton from '../components/SwitchAirportsButton';
import RoundTripButton from '../components/RoundTripButton';

const MainContainer = ({airports}) => {

    const [saveAirports, setSaveAirports] = useState([]);
    const [startingAirport, setStartingAirport] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('')

  return (
      <div className='flex flex-col items-center align-center'>
        <div className='relative bottom-6 flex flex-row justify-center'>
            <div className='w-1/2 m-0 flex justify-end'>
               <SearchInput airports={airports} searchAirport={startingAirport} setSearchAirport={setStartingAirport} position={'left'} ulId={1} />
            </div>
            <div className='absolute z-10'>
               <SwitchAirportsButton startingAirport={startingAirport} setStartingAirport={setStartingAirport} arrivalAirport={arrivalAirport} setArrivalAirport={setArrivalAirport} />
            </div>
            <div className='w-1/2 m-0 flex justify-start'>
               <SearchInput airports={airports} searchAirport={arrivalAirport} setSearchAirport={setArrivalAirport} position={'right'} ulId={2} />
            </div>
        </div>
        <div className='mt-20'>
           <SearchButton saveAirports={saveAirports} setSaveAirports={setSaveAirports} startingAirport={startingAirport} arrivalAirport={arrivalAirport} />
           <RoundTripButton />
        </div>
      </div>
  )
}

export default MainContainer