import React, { useState, useEffect } from 'react';

const ClassButton = ({myFlightClass, setMyFlightClass}) => {

    const flightClasses = ['economy', 'business', 'first'];
    const [count, setCount] = useState(0);

    useEffect(() => {
        setMyFlightClass(flightClasses[count])
    }, [count])

    return ( 
        <div className='flex w-40 h-14 mt-10'>
                        <button 
                className='h-14 p-4 bg-white text-center'
                onClick={() => {
                    if(count <= 2 && count > 0) {
                        setCount(count - 1);
                        console.log(count)
                    } else if(count <= 0) {
                        setCount(2);
                        console.log(count)
                    }
                }}>
            -
            </button>
            <input 
                className='selection w-full h-full text-center focus:outline-none' 
                value={myFlightClass}
                onChange={(e) => {
                    console.log(e.currentTarget.value);
                    setMyFlightClass(e.currentTarget.value);
                }} readOnly/>
            <button 
                className='h-14 p-4 bg-white text-center'
                onClick={() => {
                    if(count >= 0 && count < 2) {
                        setCount(count + 1)
                        console.log(myFlightClass)
                    } else {
                        setCount(0)
                    }
                }}>
            +
            </button>
        </div>
     );
}
 
export default ClassButton;