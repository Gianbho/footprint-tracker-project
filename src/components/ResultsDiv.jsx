import React from 'react'

const ResultsDiv = ({tripDatas}) => {
  return (
    <div className='flex w-screen h-[450px] overflow-hidden'>
        <h1>{tripDatas.startingAirport}</h1>
        <h1>{tripDatas.arrivalAirport}</h1>        
        <h1>{tripDatas.passengers}</h1>        
        <h1>{tripDatas.isRoundTrip}</h1>  
    </div>
  )
}

export default ResultsDiv