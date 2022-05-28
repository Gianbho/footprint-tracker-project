import React, {useState, useEffect} from 'react'

const SearchInput = ({airports, searchAirport, setSearchAirport, position, ulId, isFooterOpen, setIsFooterOpen, inputId}) => {

    let i = 0;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const ulElement = document.getElementById(ulId);
    const flightOptionsSection = document.getElementById('flightOptions');
    const [isChoseTaken, setIsChoseTaken] = useState(false);
    const inputMatches = (airport) => (searchAirport !== '') && i < 10 && (airport.code.toUpperCase().includes(searchAirport.toUpperCase()) || airport.name.toUpperCase().includes(searchAirport.toUpperCase()) || (airport.city.toUpperCase().includes(searchAirport.toUpperCase())));
    
    const hideList = () => {
      ulElement?.classList.add('hidden');
    };

    const showList = () => {
      ulElement?.classList.remove('hidden');
      console.log(flightOptionsSection)
    };

    const handleBlur = () => {
      if(!isChoseTaken) {
        setSearchAirport('');
      }
      hideList();
    };

    const handleChange = (p) => {
      if(isChoseTaken) {
        setIsChoseTaken(false);
      }
      setSearchAirport(p.value);
      p.classList.remove('border-red-600');
    };

      return (
      <div className={position == 'left' ? 'w-full flex flex-col items-end' : 'w-full flex flex-col items-start'}> 
        <div className='relative flex flex-col justify-center items-center w-full'>
          <input 
            id={inputId}
            value={searchAirport}
            placeholder={position == 'left' ? 'Starting' : 'Arrival'}
            className={position == 'left' ? 'text-center truncate font-mono shadow-md w-full h-full p-5 ml-15 rounded-l-[64px] focus:outline-none z-20' : 'text-center truncate font-mono shadow-md w-full h-full p-5 mr-15 rounded-r-[64px] focus:outline-none z-20'}
            onChange={(e) => {
              handleChange(e.currentTarget);
              showList();
            }}
            onBlur={() => {
              handleBlur();
            }}
            onFocus={() => {
              if(isFooterOpen) setIsFooterOpen(false);
            }}
          />
          <div className={position == 'left' ? 'absolute w-full flex flex-col justify-center items-end' : 'absolute w-full flex flex-col justify-center items-start'}>
            <ul id={ulId} className={ position == 'left' ? 'hidden relative top-24 overflow-hidden overflow-y-auto w-[85%] h-32 bg-white rounded-b-2xl shadow-md z-10' : 'hidden relative top-24 overflow-hidden overflow-y-auto w-[85%] h-32 bg-white rounded-b-2xl shadow-md z-10'}>
              {airports.map((airport) => {
                if(inputMatches(airport)){
                  i++;
                  console.log(airport.state);
                  return (
                    <li key={airport.code} 
                      onMouseDown={() => {
                        setSearchAirport(airport.code);
                        setIsChoseTaken(true);
                        console.log(searchAirport)
                      }}
                      className='text-center text-black-600 truncate p-1 hover:bg-red-200 hover:cursor-pointer'>
                      {`${airport?.code} - ${airport?.name || airport?.city}`}
                    </li>
                  )   
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    );
}

export default SearchInput