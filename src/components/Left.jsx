import React from 'react'
import NoNoteSelected from './NoNoteSelected'
import RightNote from './RightNote'

const Left = () => {
  return (
    // <div className='w-4/5 h-full bg-gray-50 flex justify-center items-center'>
      // {/* <NoNoteSelected /> */}
    // {/* </div> */}
    <div className='w-4/5 h-full bg-gray-50 flex justify-center items-start my-20'>
      <RightNote />
    </div>
  )
}

export default Left
