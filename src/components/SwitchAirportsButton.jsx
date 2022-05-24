import React from 'react'
import {BsArrowLeftRight} from 'react-icons/bs'

const SwitchAirportsButton = ({startingAirport, setStartingAirport, arrivalAirport, setArrivalAirport}) => {

  const switchAirports = () => {
    let tempArray = [startingAirport, arrivalAirport];
    setStartingAirport(tempArray[1]);
    setArrivalAirport(tempArray[0]);
  };

  return (
    <div className='relative bottom-3' >
        <button 
        className='shadow-md bg-white p-8 rounded-full border-solid border-4 border-gray-200'
        onClick={() => switchAirports()}>
          <BsArrowLeftRight size={30}/>
        </button>
    </div>
  )
}

export default SwitchAirportsButton