import React from 'react'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import { fetchFlightFootprints } from '../client_API/APIcalls'

const SearchButton = ({saveAirports, setSaveAirports, arrivalAirport, startingAirport, isRoundTrip}) => {
  return (
      <div className='mt-[150px] w-[250px] h-[55px] bg-red-200 border-3 rounded-[750px] border-solid shadow flex justify-end'>
        <button 
          className='h-full w-full text-left flex items-center place-content-between pl-24'
          onClick={() => {
            fetchFlightFootprints(startingAirport, arrivalAirport);
            setSaveAirports([startingAirport, arrivalAirport]);
            console.log(saveAirports);
            console.log(isRoundTrip);
          }}>
          Search
          <BsArrowRightCircleFill size={55} />        
        </button>
      </div>
  )
}

export default SearchButton