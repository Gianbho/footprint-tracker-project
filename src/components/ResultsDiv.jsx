import React, {useState, useEffect} from 'react'
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'

const ResultsDiv = ({tripDatas, isFooterOpen, setIsFooterOpen, fetchResults}) => {

  const footer = document.querySelector('footer');

  const handleFooter = () => {
    makeFooterSlide();
    hideAndShowFooterDatas();
  };

  const makeFooterSlide = () => {
    if(isFooterOpen) {
      footer.classList.remove('-translate-y-96')
    } else {
      footer.classList.add('-translate-y-96')
    }
  };

  const hideAndShowFooterDatas = () => {
    if(!isFooterOpen) {
      setIsFooterOpen(true);
    } else {
      setIsFooterOpen(false);
    }
  };

  return (
    <footer 
      id='footer'
      className={isFooterOpen ? 'flex flex-col items-center absolute -bottom-96 transition ease-in duration-500 -translate-y-96 w-screen z-10 bg-white h-[400px] rounded-t-3xl' : 'flex flex-col items-center absolute -bottom-96 transition ease-out duration-500 w-screen z-10 bg-white h-[400px] rounded-t-3xl'}>
      <div className='relative'>
        <button 
          className='h-14 w-14 relative z-10 bottom-6 rounded-full flex justify-center items-center bg-white'
          onClick={(e) => {
            handleFooter();
            console.log(fetchResults)
          }}
          >
            {isFooterOpen ? <IoIosArrowDown className='pb-2' size={35} /> : <IoIosArrowUp className='pb-2' size={35} />}
          </button>
      </div>
      <div id='datas' className={isFooterOpen ? 'h-fit' : 'hidden'}>
        {(tripDatas.startingAirport && tripDatas.arrivalAirport && tripDatas.passengers) ?
          <div>
            <h1>total emissions: {tripDatas.isRoundTrip ? (fetchResults?.co2e?.toFixed(4) * 2) : fetchResults?.co2e?.toFixed(4)}Kg</h1>
            <h1>emissions per person: {tripDatas.isRoundTrip ? ((fetchResults?.co2e / tripDatas?.passengers)?.toFixed(4) *2) : (fetchResults?.co2e / tripDatas?.passengers)?.toFixed(4)}Kg</h1>        
            <h1>CH4: {fetchResults.legs? (tripDatas.isRoundTrip ? fetchResults?.legs[0]?.constituent_gases?.ch4?.toFixed(5) * 2 : fetchResults?.legs[0]?.constituent_gases?.ch4?.toFixed(5)) : ''}</h1>        
            <h1>N2O: {fetchResults.legs? (tripDatas.isRoundTrip ? fetchResults?.legs[0]?.constituent_gases?.n2o?.toFixed(4) * 2 : fetchResults?.legs[0]?.constituent_gases?.ch4?.toFixed(4)) : ''}</h1>        
            <h1>CO2: {fetchResults.legs? (tripDatas.isRoundTrip ? fetchResults?.legs[0]?.constituent_gases?.co2?.toFixed(4) * 2 : fetchResults?.legs[0]?.constituent_gases?.ch4?.toFixed(4)) : ''}</h1>        
            <h1>{tripDatas.isRoundTrip}</h1>
          </div>
          :
          <h1>No Datas</h1>
        }
      </div>
    </footer>
  )
}

export default ResultsDiv