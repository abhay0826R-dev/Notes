import React from 'react'

const RightNote = () => {

    const setHeading = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        
    }

  return (
    <div>
        <div className='mb-20 flex flex-col'>
            <form onSubmit={setHeading}>
                <input type='text' placeholder='Note Name' className='font-bold text-4xl border-b-2'></input>
            </form>
            <span>Last updated May 14, 2026 10:08 AM</span>
        </div>
        <article>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi vitae ab accusamus nemo perspiciatis aspernatur ratione! Odio sint magni necessitatibus?</p>
        </article>
    </div>
  )
}

export default RightNote
