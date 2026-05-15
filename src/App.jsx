import React, { useState, useEffect } from 'react'
import Left from './components/Left'
import Right from './components/Right'

const App = () => {

  const currDate = new Date();


  const [title, setTitle] = useState("New Note")
  const [date, setDate] = useState(currDate.toISOString().slice(0, 10))
  const [para, setPara] = useState("No additional text")

  useEffect (function() {
    console.log(title)
  }, [title])

  const Notes = [
    {
      id:1,
      title: title,
      content: para,
      date: date
    }
  ]


  return (
    <div className='flex h-screen w-full'>
      <Left e={Notes} />
      <Right e={Notes} setTitle={setTitle} setDate={setDate} setPara={setPara} para={para}/>
    </div>
  )
}

export default App
