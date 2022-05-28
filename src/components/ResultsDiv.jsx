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
      className={isFooterOpen ? 'flex flex-col items-center absolute -bottom-96 transition ease-in duration-500 -translate-y-96 w-screen md:w-[750px] z-10 bg-white h-[400px] rounded-t-3xl' : 'flex flex-col items-center absolute -bottom-96 transition ease-out duration-500 w-screen md:w-[750px] z-10 bg-white h-[400px] rounded-t-3xl'}>
      <div className='relative'>
        <button 
          className='h-14 w-14 relative z-10 bottom-6 rounded-full flex justify-center items-center bg-white'
          onClick={(e) => {
            handleFooter();
            console.log(fetchResults);
            console.log(!tripDatas.passengers)
          }}
          >
            {isFooterOpen ? <IoIosArrowDown className='pb-2' size={35} /> : <IoIosArrowUp className='pb-2' size={35} />}
          </button>
      </div>
        {(tripDatas.startingAirport && tripDatas.arrivalAirport && !(tripDatas.passengers == 0)) ?       
          <div id='datas' className={isFooterOpen ? 'flex flex-col items-center h-fit w-full' : 'hidden'}>
            <h1>Your flight emissions</h1>
            <div className='flex justify-around my-7 mx-5'>
              <div className='flex flex-col justify-center items-center'>
                <h1>CH4</h1>
                <input 
                  type='text'
                  className='text-center p-4 bg-myIntenseBlue w-4/5' 
                  value={fetchResults.legs? (tripDatas.isRoundTrip ? fetchResults?.legs[0]?.constituent_gases?.ch4?.toFixed(5) * 2 : fetchResults?.legs[0]?.constituent_gases?.ch4?.toFixed(5)) : ''} readOnly />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h1>CO2</h1>
                <input 
                  type='text'
                  className='text-center p-4 bg-myIntenseBlue w-4/5' 
                  value={fetchResults.legs? (tripDatas.isRoundTrip ? fetchResults?.legs[0]?.constituent_gases?.co2?.toFixed(4) * 2 : fetchResults?.legs[0]?.constituent_gases?.co2?.toFixed(4)) : ''} readOnly />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h1>N2O</h1>
                <input 
                  type='text'
                  className='text-center p-4 bg-myIntenseBlue w-4/5' 
                  value={fetchResults.legs? (tripDatas.isRoundTrip ? fetchResults?.legs[0]?.constituent_gases?.n2o?.toFixed(4) * 2 : fetchResults?.legs[0]?.constituent_gases?.n2o?.toFixed(4)) : ''} readOnly />
              </div>
            </div>
            <div className='flex justify-around my-7'>
            <div className='flex flex-col items-center'>
              <h1>Emissions per person</h1>
              <input 
                type='text'
                className='text-center p-4 bg-myIntenseBlue w-4/5' 
                value={`${tripDatas.isRoundTrip ? ((fetchResults?.co2e / tripDatas?.passengers)?.toFixed(4) *2) : (fetchResults?.co2e / tripDatas?.passengers)?.toFixed(4)} Kg`} readOnly/>
            </div>            
            <div className='flex flex-col items-center'>
              <h1>Total emissions</h1>
              <input 
                type='text'
                className='text-center p-4 bg-myIntenseBlue w-4/5' 
                value={`${tripDatas.isRoundTrip ? (fetchResults?.co2e?.toFixed(4) * 2) : fetchResults?.co2e?.toFixed(4)} Kg`} readOnly/>
            </div>
            </div>
          </div>
          :
          <h1>No Datas</h1>
        }
    </footer>
  )
}

export default ResultsDiv