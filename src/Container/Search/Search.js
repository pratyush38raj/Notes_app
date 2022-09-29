import React from 'react'
import {BiSearchAlt} from 'react-icons/bi';
import "./Search.css"

const Search = ({handleSearchText}) => {
  return (
    <div className='header_container'>
      <h1>Notes</h1>
      <div className='search'>
        <BiSearchAlt className='search-icons' size= '1.3rem' />
        <input 
          onChange={(event)=>handleSearchText(event.target.value)} 
          type='text' 
          className='input' 
          placeholder='Search...' />
      </div>
    </div>
  )
}

export default Search
