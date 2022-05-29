import React, {useState} from 'react'
import {BsArrowLeftRight} from 'react-icons/bs'

const SwitchAirportsButton = ({startingAirport, setStartingAirport, arrivalAirport, setArrivalAirport}) => {

  const startingInput = document.getElementById('startingInput');
  const arrivalInput = document.getElementById('arrivalInput');
  const [isHovered, setIsHovered] = useState(false);

  const switchAirports = () => {
    let tempArray = [startingAirport, arrivalAirport];
    setStartingAirport(tempArray[1]);
    setArrivalAirport(tempArray[0]);
  };

  return (
    <div className='relative' >
        <button 
        className='shadow-md z-30 bg-white p-5 md:p-6 rounded-full border-solid border-1 hover:p-6 md:hover:p-7 md:hover:bg-myIntenseBlue hover:ease-in hover:duration-75 active:scale-90 md:active:bg-myIntenseBlue '
        onClick={() => {
          if(startingAirport && arrivalAirport) {
            switchAirports();
          } else {
            if(startingInput.value == '') startingInput.classList.add('border-red-600', 'border-2');
            if(arrivalInput.value == '') arrivalInput.classList.add('border-red-600', 'border-2');
          }
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <BsArrowLeftRight color={isHovered ? 'white' : 'black'} size={30}/>
        </button>
    </div>
  )
}

export default SwitchAirportsButton