import React, { useState } from 'react'
import Left from './components/Left'
import Right from './components/Right'

const App = () => {

  const [title, setTitle] = useState("New Note")
  const [para, setPara] = useState("No additional text")

  const Notes = [
    {
      id:1,
      title: title,
      content: para,
      date: "xxxxx"
    },
    {
      id:2,
      title: title,
      content: para,
      date: "xxxxxx"
    }
  ]


  return (
    <div className='flex h-screen w-full'>
      <Left e={Notes} />
      <Right />
    </div>
  )
}

export default App
