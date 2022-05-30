import React from 'react'

const SearchButton = ({saveAirports, setSaveAirports, arrivalAirport, startingAirport, isRoundTrip, setIsFooterOpen, passengers}) => {

  const passengersInput = document.getElementById('passengersInput');
  const startingInput = document.getElementById('startingInput');
  const arrivalInput = document.getElementById('arrivalInput');

  const checkPassengers = () => {
    if(!(typeof(parseInt(passengersInput.value)) === 'number') || (isNaN(parseInt(passengersInput.value))) || (passengersInput.value == 0)) {
      passengersInput.classList.add('border-red-600', 'border-2')
      return false;
    } else {
      return true;
    }
  };

  const checkAirports = () => {
    if(startingAirport && arrivalAirport) {
      return true
    } else {
      if(startingInput.value == '') startingInput.classList.add('border-2', 'border-red-600');
      if(arrivalInput.value == '') arrivalInput.classList.add('border-2', 'border-red-600');
      return false;
    }
  };

  const areDatasValid = () => {
    if((checkAirports() && checkPassengers())) {
      setSaveAirports([startingAirport, arrivalAirport]);
      setIsFooterOpen(true);
    } else if(!checkAirports()) {
      checkPassengers();
    }
  };

  return (
      <div className='w-1/2 mb-8 h-[55px] bg-[#FFBCBC] border-3 border-solid rounded-full shadow-md hover:scale-105 hover:duration-100 active:scale-90'>
        <button 
          className='h-full w-full text-center font-mono text-lg'
          onClick={() => {
            areDatasValid();
          }}>
          Search
        </button>
      </div>
  )
}

export default SearchButton