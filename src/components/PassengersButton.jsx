import React from 'react'

const PassengersButton = ({passengers, setPassengers}) => {
  return (
    <div className='w-14 h-14 flex justify-center items-center rounded-full border-2 border-green-600 overflow-hidden'>
      <input 
        className='w-14 h-14 pb-1 rounded-full text-center' 
        value={passengers}
        onChange={(e) => setPassengers(e.currentTarget.value)} />
      </div>
  )
}

export default PassengersButton