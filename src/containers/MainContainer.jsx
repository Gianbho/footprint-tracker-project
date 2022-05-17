import React, {useState} from 'react'
import SearchInput from '../components/SearchInput'
import SearchButton from '../components/SearchButton';

const MainContainer = ({airports}) => {

    const [saveAirports, setSaveAirports] = useState([]);
    const [startAirport, setStartAirport] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('')

  return (
      <div className='flex flex-col items-center'>
        <div className='flex flex-row justify-center'>
            <div className='w-1/2 m-0'>
               <SearchInput airports={airports} searchAirport={startAirport} setSearchAirport={setStartAirport} />
            </div>
            <div className=' w-1/2 m-0'>
               <SearchInput airports={airports} searchAirport={arrivalAirport} setSearchAirport={setArrivalAirport} />
            </div>
        </div>
        <div className='mt-20'>
           <SearchButton saveAirports={saveAirports} setSaveAirports={setSaveAirports} startAirport={startAirport} arrivalAirport={arrivalAirport} />
        </div>
      </div>
  )
}

export default MainContainer