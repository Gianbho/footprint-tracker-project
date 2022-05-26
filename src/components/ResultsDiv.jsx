import React, {useState, useEffect} from 'react'

const ResultsDiv = ({tripDatas, isFooterOpen, setIsFooterOpen, fetchResults}) => {

  const footer = document.getElementById('footer');
  const footerDatas = document.getElementById('datas');

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
    <div 
      id='footer'
      className={isFooterOpen ? 'flex flex-col items-center absolute -bottom-96 transition ease-in duration-500 -translate-y-96 w-screen z-10 bg-blue-600 h-[400px] rounded-t-3xl' : 'flex flex-col items-center absolute -bottom-96 transition ease-out duration-500 w-screen z-10 bg-blue-600 h-[400px] rounded-t-3xl'}>
      <div className='relative'>
        <button 
          className='h-14 w-14 relative z-10 bottom-10 rounded-full bg-black p-8'
          onClick={(e) => {
            handleFooter();
            console.log(fetchResults)
          }}
          >
            <p>1</p>
          </button>
      </div>
      <div id='datas' className={isFooterOpen ? 'h-fit' : 'hidden'}>
        <h1>total emissions: {fetchResults?.co2e?.toFixed(4)}Kg</h1>
        <h1>emissions per person: {(fetchResults?.co2e / tripDatas?.passengers)?.toFixed(4)}Kg</h1>        
        <h1>CH4: {fetchResults.legs? fetchResults?.legs[0]?.constituent_gases?.ch4?.toFixed(5) : ''}</h1>        
        <h1>N2O: {fetchResults.legs? fetchResults?.legs[0]?.constituent_gases?.n2o?.toFixed(4) : ''}</h1>        
        <h1>CO2: {fetchResults.legs? fetchResults?.legs[0]?.constituent_gases?.co2?.toFixed(4) : ''}</h1>        
        <h1>{tripDatas.isRoundTrip}</h1>
      </div>
    </div>
  )
}

export default ResultsDiv