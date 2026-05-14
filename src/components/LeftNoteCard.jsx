import React from 'react'
import { useState } from 'react';

const LeftNoteCard = ({ note }) => {
  return (
    <div className='bg-blue-100 border-l-6 border-blue-500 p-7 m-0 flex flex-col justify-start w-full'>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p>{note.date}</p>
    </div>
  )
}

export default LeftNoteCard
