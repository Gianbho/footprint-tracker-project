import React from 'react'
import roundTripImage from '../assets/round-trip-flight.png'

const RoundTripButton = ({isRoundTrip, setIsRoundTrip, setIsFooterOpen}) => {
  return (
    <div className='flex flex-col items-center w-1/2'>
      <h4 className='text-align-center font-mono'>{isRoundTrip ? 'Round-trip' : 'One-way'}</h4>
      <div className='h-14 w-14 overflow-hidden rounded-full shadow-gray-400 shadow-md active:scale-90'>
        <button 
          onClick={(e) => {
            if(!isRoundTrip) {
              setIsRoundTrip(!isRoundTrip); 
              e.currentTarget.firstChild.classList.replace('bg-white', 'bg-myIntenseBlue');
              console.log(isRoundTrip);
            } else {
              setIsRoundTrip(!isRoundTrip);
              e.currentTarget.firstChild.classList.replace('bg-myIntenseBlue', 'bg-white');
              console.log(isRoundTrip);
            }
            setIsFooterOpen(false);
          }}>
          <img className='h-14 w-14 bg-white' alt='round trip plane' src={roundTripImage} />
        </button>
      </div>
    </div>
  )
}

export default RoundTripButton