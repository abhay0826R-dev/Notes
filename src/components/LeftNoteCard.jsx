import React from 'react'
import { useState } from 'react';

const LeftNoteCard = () => {

  const [noteHeading, setNoteHeading] = useState('New Note');

  const setNoteNameLeft = () => {
    setNote(e)
  }

  return (
    <div className='bg-blue-100 border-l-6 border-blue-500 p-7 m-0 flex flex-col justify-start w-full'>
      <h1>new Note</h1>
      <p>No additional text</p>
      <p>May 13, 2026 11:52 PM</p>
    </div>
  )
}

export default LeftNoteCard
