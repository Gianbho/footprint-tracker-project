import React, {useState, useEffect} from 'react'

const SearchInput = ({airports, searchAirport, setSearchAirport, position, ulId, isFooterOpen, setIsFooterOpen}) => {

    let i = 0;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const ulElement = document.getElementById(ulId);
    const flightOptionsSection = document.getElementById('flightOptions');
    const [isChoseTaken, setIsChoseTaken] = useState(false);
    const inputMatches = (airport) => (searchAirport !== '') && i < 10 && (airport.code.toUpperCase().includes(searchAirport.toUpperCase()) || airport.name.toUpperCase().includes(searchAirport.toUpperCase()) || (airport.city.toUpperCase().includes(searchAirport.toUpperCase())));
    
    const hideList = () => {
      ulElement?.classList.add('hidden');
      flightOptionsSection.classList.remove('relative', 'top-28');
    };

    const showList = () => {
      ulElement?.classList.remove('hidden');
      flightOptionsSection.classList.add('relative', 'top-28');
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
      setSearchAirport(p);
    };

      return (
      <div className={position == 'left' ? 'w-full flex flex-col items-end' : 'w-full flex flex-col items-start'}> 
        <div className='relative flex flex-col justify-center items-center w-full'>
          <input 
                value={searchAirport}
                className={position == 'left' ? 'text-center truncate font-mono shadow-md w-full h-full p-5 ml-10 pr-12 rounded-l-[64px] border-4 border-gray-200 focus:outline-none' : 'text-center truncate font-mono shadow-md w-full h-full p-5 mr-10 pl-12 rounded-r-[64px] border-4 border-gray-200 focus:outline-none'}
                onChange={(e) => {
                  handleChange(e.currentTarget.value);
                  showList();
                }}
                onBlur={() => {
                  handleBlur();
                }}
                onFocus={() => {
                  if(isFooterOpen) setIsFooterOpen(false);
                }}
          />
          <div className='absolute w-full flex flex-col justify-center items-center'>
            <ul id={ulId} className='hidden relative top-24 overflow-hidden overflow-y-auto w-40 h-32'>
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