import React, {useState, useEffect} from 'react'

const ResultsDiv = ({tripDatas, isFooterOpen, setIsFooterOpen}) => {

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
      //footerDatas.classList.replace('hidden', 'flex');
    } else {
      setIsFooterOpen(false);
      //footerDatas.classList.replace('flex', 'hidden');
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
          }}
          >
            <p>1</p>
          </button>
      </div>
      <div id='datas' className={isFooterOpen ? 'h-fit' : 'hidden'}>
      <h1>{tripDatas.startingAirport}</h1>
        <h1>{tripDatas.arrivalAirport}</h1>        
        <h1>{tripDatas.passengers}</h1>        
        <h1>{tripDatas.isRoundTrip}</h1>  
      </div>
    </div>
  )
}

export default ResultsDiv