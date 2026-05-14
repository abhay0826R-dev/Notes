import React from 'react'
import Nav from './Nav'
import Notes from './Notes'

const Left = ({ e }) => {
  return (
      <div className='w-1/5 bg-white h-full border-r-2 border-gray-300'>
      <Nav />
      <hr className='w-full'/>
      <Notes e={e} />
    </div>
  )
}

export default Left
