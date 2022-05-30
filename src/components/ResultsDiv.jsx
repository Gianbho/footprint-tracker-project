import React from 'react'
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'

const ResultsDiv = ({tripDatas, isFooterOpen, setIsFooterOpen, fetchResults}) => {

  const footer = document.querySelector('footer');

  const OPENED_FOOTER_STYLE = 'flex flex-col items-center absolute -bottom-96 transition ease-in duration-500 -translate-y-96 w-screen md:w-[750px] z-40 bg-gradient-to-b from-myIntenseBlue via-white to-white h-[400px] rounded-t-3xl';
  const CLOSED_FOOTER_STYLE = 'flex flex-col items-center absolute -bottom-96 transition ease-out duration-500 w-screen md:w-[750px] z-10 bg-gradient-to-b from-myIntenseBlue via-white to-white h-[400px] rounded-t-3xl';
  const H4_STYLE = 'mb-2 font-mono text-sm md:text-lg';
  const DATAS_INPUT_RESULT_STYLE = 'text-center p-4 bg-myIntenseBlue rounded-2xl shadow-inset w-4/5';

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
      className={isFooterOpen ? OPENED_FOOTER_STYLE : CLOSED_FOOTER_STYLE}>
      <div className='relative'>
        <button 
          className='flex justify-center items-center relative bottom-6 h-14 w-14 z-10 rounded-full bg-myIntenseBlue'
          onClick={(e) => {
            handleFooter();
          }}
          >
            {isFooterOpen ? <IoIosArrowDown className='pb-2' size={35} /> : <IoIosArrowUp className='pb-2' size={35} />}
          </button>
      </div>
        {(tripDatas.startingAirport && tripDatas.arrivalAirport && !(tripDatas.passengers == 0)) ?       
          <div id='datas' className={isFooterOpen ? 'flex flex-col items-center h-fit w-full' : 'hidden'}>
            <h1 className='font-mono text-2xl'>Your flight emissions</h1>
            <div className='flex justify-around my-7 mx-5'>
              <div className='flex flex-col justify-center items-center'>
                <h4 className={H4_STYLE}>CH4</h4>
                <input 
                  type='text'
                  className={DATAS_INPUT_RESULT_STYLE} 
                  value={fetchResults.legs? (tripDatas.isRoundTrip ? fetchResults?.legs[0]?.constituent_gases?.ch4?.toFixed(5) * 2 : fetchResults?.legs[0]?.constituent_gases?.ch4?.toFixed(5)) : ''} readOnly />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h4 className={H4_STYLE}>CO2</h4>
                <input 
                  type='text'
                  className={DATAS_INPUT_RESULT_STYLE} 
                  value={fetchResults.legs? (tripDatas.isRoundTrip ? fetchResults?.legs[0]?.constituent_gases?.co2?.toFixed(4) * 2 : fetchResults?.legs[0]?.constituent_gases?.co2?.toFixed(4)) : ''} readOnly />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h4 className={H4_STYLE}>N2O</h4>
                <input 
                  type='text'
                  className={DATAS_INPUT_RESULT_STYLE} 
                  value={fetchResults.legs? (tripDatas.isRoundTrip ? fetchResults?.legs[0]?.constituent_gases?.n2o?.toFixed(4) * 2 : fetchResults?.legs[0]?.constituent_gases?.n2o?.toFixed(4)) : ''} readOnly />
              </div>
            </div>
            <div className='flex justify-around my-7'>
            <div className='flex flex-col items-center'>
              <h4 className={H4_STYLE}>Emissions per person</h4>
              <input 
                type='text'
                className={DATAS_INPUT_RESULT_STYLE} 
                value={`${tripDatas.isRoundTrip ? ((fetchResults?.co2e / tripDatas?.passengers)?.toFixed(4) *2) : (fetchResults?.co2e / tripDatas?.passengers)?.toFixed(4)} Kg`} readOnly/>
            </div>            
            <div className='flex flex-col items-center'>
              <h4 className={H4_STYLE}>Total emissions</h4>
              <input 
                type='text'
                className={DATAS_INPUT_RESULT_STYLE} 
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