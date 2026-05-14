import React from 'react'
import NoNoteSelected from './NoNoteSelected'
import RightNote from './RightNote'

const Left = ({ e , setTitle, setDate, setPara, para}) => {
  return (
    // <div className='w-4/5 h-full bg-gray-50 flex justify-center items-center'>
      // {/* <NoNoteSelected /> */}
    // {/* </div> */}
    <div className='w-4/5 h-full bg-gray-50 flex justify-center items-start py-20 px-50'>
      <RightNote notes={e} setTitle={setTitle} setDate={setDate} setPara={setPara} para={para}/>
    </div>
  )
}

export default Left
