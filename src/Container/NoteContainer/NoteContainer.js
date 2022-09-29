import React from 'react'
import Note from '../Note/Note'
import './NoteContainer.css'

const NoteContainer = (props) => {

  const reverArray = (arr) => {
    const array=[]

    for (let i=arr.length - 1; i >=0; --i){
      array.push(arr[i])
    }
    return array
  }

  const notes= reverArray(props.notes)

  return (
    <div className='note-container content_body'>

      {
        notes.map((item)=> <Note
        key={item.id}
        note={item}
        deleteNote={props.deleteNote}
        updateText={props.updateText}
        />)
       
      }
      
    </div>
  )
}

export default NoteContainer
