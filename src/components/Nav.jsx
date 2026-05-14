import React from "react";
import NoteIcon from "../assets/Note.svg";
import { useState } from 'react';

const Nav = () => {

  let noteBoiler = [
      {id:1},
      {Title:'New Note'},
      {Content: 'Write Your Content Here'}
    ]

  const [note, setNote] = useState(noteBoiler)

  function addCard() {
    
  }

  return (
    <div className="flex justify-between items-center m-10">
      <div className="flex items-center">
        <img className='h-10 w-10' src={NoteIcon} />
        <h1 className="text-2xl ml-1 font-bold">Notes</h1>
      </div>

      <button className="text-2xl bg-blue-50 p-4 text-blue-500 h-10 w-10 rounded-lg flex items-center justify-center
      hover:bg-blue-100 hover:text-blue-800"
      onClick={addCard}>+</button>
    </div>
    
  );
};

export default Nav;
