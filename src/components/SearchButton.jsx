import React from 'react'

const SearchButton = ({saveAirports, setSaveAirports, arrivalAirport, startAirport}) => {
  return (
      <>
        <button onClick={() => {
          setSaveAirports([startAirport, arrivalAirport]);
          console.log(saveAirports);
        }}>
          click
        </button>        
      </>
  )
}

export default SearchButton