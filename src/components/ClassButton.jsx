import React, { useState, useEffect } from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const ClassButton = ({myFlightClass, setMyFlightClass, setIsFooterOpen}) => {

    const flightClasses = ['economy', 'business', 'first'];
    const [count, setCount] = useState(0);

    useEffect(() => {
        setMyFlightClass(flightClasses[count])
    }, [count])

    return ( 
        <div className='flex w-40 h-14 mt-10 shadow-md rounded-3xl'>
            <button 
                className='h-14 p-4 bg-white align-middle rounded-l-3xl'
                onClick={() => {
                    if(count <= 2 && count > 0) {
                        setCount(count - 1);
                        setIsFooterOpen(false);
                        console.log(count)
                    } else if(count <= 0) {
                        setCount(2);
                        console.log(count)
                    }
                }}>
            <IoIosArrowBack size={12} />
            </button>
            <input 
                className='w-full h-full text-center focus:outline-none pb-1' 
                value={myFlightClass}
                onChange={(e) => {
                    console.log(e.currentTarget.value);
                    setMyFlightClass(e.currentTarget.value);
                }} readOnly/>
            <button 
                className='h-14 p-4 bg-white align-middle rounded-r-3xl'
                onClick={() => {
                    if(count >= 0 && count < 2) {
                        setCount(count + 1)
                        setIsFooterOpen(false);
                        console.log(myFlightClass)
                    } else {
                        setCount(0)
                    }
                }}>
            <IoIosArrowForward size={12} />
            </button>
        </div>
     );
}
 
export default ClassButton;