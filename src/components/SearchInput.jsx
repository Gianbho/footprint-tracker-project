import React, {useState, useEffect} from 'react'

const SearchInput = ({airports, searchAirport, setSearchAirport}) => {

    let i = 0;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [isChooseTaken, setIsChooseTaken] = useState(false);
  
    const handleChange = (i) => {
      setSearchAirport(i);
    };

    useEffect(() => {
      if(searchAirport == '') {
        setIsChooseTaken(false);
      }
    }, [searchAirport]);
  
      return (
      <div className='flex flex-col justify-center items-center'> 
        <div className='relative flex flex-col justify-center items-center w-full border-solid border-2 border-black-600'>
          <input type='text' 
                value={searchAirport}
                className='w-full h-full border-solid border-black'
                onChange={(e) => {
                  handleChange(e.currentTarget.value);
                }}
                onBlur={() => {
                  setTimeout(() => {
                    if(isChooseTaken == false) {
                      setSearchAirport('');
                    }  
                  }, 150)
                }}
          />
          <div className={searchAirport.length ? 'absolute top-6 w-full flex flex-col justify-center items-center border-solid border-2 border-black-600 border-t-white' : 'absolute top-6 w-full flex flex-col justify-center items-center'}>
            <ul className='list-none w-full'>
              {airports.map((airport) => {
                if((searchAirport !== '') && (airport.code.toUpperCase().includes(searchAirport.toUpperCase()) || airport.name.toUpperCase().includes(searchAirport.toUpperCase()) || airport.city.toUpperCase().includes(searchAirport.toUpperCase())) && i < 3){
                  i++;
                  return (
                    <li key={airport.code} 
                        onClick={(e) => {
                          setIsChooseTaken(true);
                          setSearchAirport(e.currentTarget.innerHTML);
                          console.log(i);
                        }}
                        className='text-black-600 truncate'>
                        {`${airport.code} - ${airport?.name || airport.city}`}
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