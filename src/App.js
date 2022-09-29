import React, {useEffect, useState} from 'react';
import './App.css';
import Search from "./Container/Search/Search"
import NoteContainer from "./Container/NoteContainer/NoteContainer"
import Sidebar from "./Container/Sidebar/Sidebar"

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || [])

  const [searchText, setSearchText] = useState('')

  const addNote = (color)=>{
    const tempNotes=[...notes]

    tempNotes.push({
      id:Date.now() +""+Math.floor(Math.random()*78),
      text: "",
      time: Date.now(),
      color,
    })
    setNotes(tempNotes)
  }

  const deleteNote=(id)=>{
    const tempNotes=[...notes]
    const index= tempNotes.findIndex(item=>item.id===id)
    if(index<0)return

    tempNotes.splice(index,1)
    setNotes(tempNotes)
  }

  const updateText=(text, id)=>{
    const tempNotes=[...notes]
    const index= tempNotes.findIndex(item=>item.id===id)
    if(index<0)return

    tempNotes[index].text=text;
    setNotes(tempNotes)
  }

  useEffect(()=>{
    localStorage.setItem('notes-app',JSON.stringify(notes))
  })


  return (
    <div className="App">
       <Search handleSearchText={setSearchText} />
       <div className='content_body'>
          <Sidebar addNote={addNote} />
          <NoteContainer 
            notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
            deleteNote={deleteNote} 
            updateText={updateText} />
       </div>
       
    </div>
  );
}

export default App;
