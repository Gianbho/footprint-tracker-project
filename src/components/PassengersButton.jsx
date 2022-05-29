import React from 'react'

const PassengersButton = ({passengers, setPassengers, setIsFooterOpen}) => {
  return (
    <div className='flex flex-col items-center w-1/2'>
      <h4 className='font-mono '>Passengers</h4>
      <div className='w-14 h-14 flex justify-center items-center rounded-full shadow-md overflow-hidden'>
        <input 
          id='passengersInput'
          className='w-14 h-14 pb-1 rounded-full text-center focus:outline-none'
          value={passengers}
          onChange={(e) => {
            setPassengers(e.currentTarget.value);
            e.currentTarget.classList.remove('border-red-600', 'border-2')
          }} 
          onFocus={() => setIsFooterOpen(false)}
          />
        </div>
    </div>
  )
}

export default PassengersButton