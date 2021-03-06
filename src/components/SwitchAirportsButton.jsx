import React, {useState} from 'react'
import {BsArrowLeftRight} from 'react-icons/bs'

const SwitchAirportsButton = ({startingAirport, setStartingAirport, arrivalAirport, setArrivalAirport}) => {

  const startingInput = document.getElementById('startingInput');
  const arrivalInput = document.getElementById('arrivalInput');

  const SWITCH_BUTTON_STYLE = 'shadow-md z-30 bg-white p-5 md:p-6 rounded-full border-solid border-1 hover:p-6 md:hover:p-7 hover:bg-myIntenseBlue hover:text-white hover:ease-in hover:duration-75 active:scale-90';

  const switchAirports = () => {
    let tempArray = [startingAirport, arrivalAirport];
    setStartingAirport(tempArray[1]);
    setArrivalAirport(tempArray[0]);
  };

  return (
    <div className='relative' >
        <button 
        className={SWITCH_BUTTON_STYLE}
        onClick={() => {
          if(startingAirport && arrivalAirport) {
            switchAirports();
          } else {
            if(startingInput.value == '') startingInput.classList.add('border-red-600', 'border-2');
            if(arrivalInput.value == '') arrivalInput.classList.add('border-red-600', 'border-2');
          }
          }}>
          <BsArrowLeftRight size={30}/>
        </button>
    </div>
  )
}

export default SwitchAirportsButton