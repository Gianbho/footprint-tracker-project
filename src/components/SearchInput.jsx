import React, {useState} from 'react'

const SearchInput = ({airports, searchAirport, setSearchAirport, position, ulId, isFooterOpen, setIsFooterOpen, inputId}) => {

    let i = 0;

    const ulElement = document.getElementById(ulId);
    const inputMatches = (airport) => (searchAirport !== '') && i < 10 && (airport.code.toUpperCase().includes(searchAirport.toUpperCase()) || airport.name.toUpperCase().includes(searchAirport.toUpperCase()) || (airport.city.toUpperCase().includes(searchAirport.toUpperCase())));
    
    const [isChoseTaken, setIsChoseTaken] = useState(false);

    const LEFT_INPUT_STYLE = 'text-center truncate font-mono text-lg shadow-md w-full h-full p-5 ml-15 rounded-l-[64px] focus:outline-none z-20';
    const RIGHT_INPUT_STYLE = 'text-center truncate font-mono text-lg shadow-md w-full h-full p-5 mr-15 rounded-r-[64px] focus:outline-none z-20';
    const LEFT_UL_STYLE = 'hidden overflow-hidden overflow-y-auto w-[90%] h-fit max-h-32 bg-white rounded-b-2xl shadow-md z-10';
    const RIGHT_UL_STYLE = 'hidden overflow-hidden overflow-y-auto w-[90%] h-fit max-h-32 bg-white rounded-b-2xl shadow-md z-10';

    const hideList = () => {
      ulElement?.classList.add('hidden');
    };

    const showList = () => {
      ulElement?.classList.remove('hidden');
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
      p.classList.remove('border-red-600', 'border-2');
    };

      return (
      <div className={position == 'left' ? 'flex flex-col items-end w-full' : 'flex flex-col items-start w-full'}> 
        <div className='relative block justify-center items-center w-full'>
          <input 
            id={inputId}
            value={searchAirport}
            placeholder={position == 'left' ? 'Starting' : 'Arrival'}
            className={position == 'left' ? LEFT_INPUT_STYLE : RIGHT_INPUT_STYLE}
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
          <div className={position == 'left' ? 'absolute flex flex-col justify-center items-end w-full ' : 'absolute flex flex-col justify-center items-start w-full'}>
            <ul id={ulId} className={ position == 'left' ? LEFT_UL_STYLE : RIGHT_UL_STYLE}>
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
                      className='p-1 text-center text-black-600 truncate hover:bg-red-200 hover:cursor-pointer'>
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