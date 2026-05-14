import React from 'react'
import LeftNoteCard from './LeftNoteCard'

const Notes = ({e}) => {
  return (
    <div className=''>
      {/* <p className='text-gray-500'>No notes yet, Click the + button to create one.</p> */}
      <div>
        {e.map(note  => (
          <LeftNoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  )
}

export default Notes
