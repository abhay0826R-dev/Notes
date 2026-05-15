import React from 'react'

const RightNote = ({ notes, setTitle, setDate, setPara, para }) => {

    const currentNote = notes[0];

    const setHeading = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    function updateDate() {
        let date = new Date()
        setDate(date.toDateString().slice(4,10) + ", " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }

    const handleFinalize = (e) => {
        e.preventDefault()
        updateDate()
    }

    const setParag = (d) => {
        d.preventDefault()
        setPara(d.target[0].value)
    }

  return (
        <div className='w-full h-full flex flex-col'>
        {/* Header */}
        <div className='flex flex-col items-start justify-center p-4'>
            <form onSubmit={handleFinalize}>
                <input onChange={setHeading}
                onBlur={updateDate}
                id='title' type='text' className='font-bold text-5xl focus:outline-0 bg-transparent' placeholder="New Note" />
            </form>
            <span>{currentNote.date}</span>
        </div>

        {/* Body */}
        <div className='relative flex-1'>
            <textarea
                placeholder={para}
                className='focus:outline-0 w-full h-full text-2xl resize-none bg-transparent p-2'
            />
            <button className='absolute bottom-3 right-3 bg-blue-300 py-2 px-5 rounded-3xl'
            onclick={setParag}>
                save
            </button>
        </div>
    </div>
  )
}

export default RightNote
