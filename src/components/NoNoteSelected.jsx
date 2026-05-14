import React from 'react'
import Pen from '../assets/pen.jsx'   

const NoNoteSelected = () => {
  return (
    <div className='w-90 text-center h-fit flex flex-col items-center justify-center'>
        <div className='bg-white text-blue-500 p-7 w-fit h-fit rounded-3xl shadow-lg mb-7
        hover:bg-blue-50 hover:shadow-xl'>
            <Pen className='w-10 h-10'/>
        </div>
        <h2 className='mb-1'>No Note Selected</h2>
        <p className='text-gray-400'>Select a note from the sidebar or create a new one to get started</p>
    </div>
  )
}

export default NoNoteSelected
