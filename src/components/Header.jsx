import React from 'react'

const Header = () => {
  return (
    <header className='flex flex-col justify-center items-center h-[15%]'>
        <h1 className='font-mono text-3xl'>Flight footprint calculator</h1>
        <h4 className='font-mono self-end'>Gianluca's React.js project</h4>
    </header>
  )
}

export default Header