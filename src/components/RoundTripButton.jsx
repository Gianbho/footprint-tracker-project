import React from 'react'
import roundTripImage from '../assets/round-trip-flight.png'

const RoundTripButton = ({isRoundTrip, setIsRoundTrip, setIsFooterOpen}) => {
  return (
    <div className='h-14 w-14 rounded-full overflow-hidden shadow'>
      <button 
        onClick={(e) => {
          if(!isRoundTrip) {
            setIsRoundTrip(!isRoundTrip); 
            e.currentTarget.firstChild.classList.replace('bg-blue-200', 'bg-red-200');
            console.log(isRoundTrip);
          } else {
            setIsRoundTrip(!isRoundTrip);
            e.currentTarget.firstChild.classList.replace('bg-red-200', 'bg-blue-200');
            console.log(isRoundTrip);
          }
          setIsFooterOpen(false);
        }}>
        <img className='h-14 w-14 bg-blue-200' src={roundTripImage} />
      </button>
    </div>
  )
}

export default RoundTripButton