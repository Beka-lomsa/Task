import React, { Component } from 'react'
import { BsSearch } from 'react-icons/bs';

 class SearchBar extends Component {
  render() {
   return (
      <div className='search-section'>
        <form>
          <button className='search-btn' title='button' type="submit">
            <BsSearch className='search-icon'/>
          </button>
          <input className='input-space' type="text"/>
        </form>
      </div>
   )
  } 
 }

 export default SearchBar;