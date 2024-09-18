import React from 'react'

const SearchInput = () => {
  return (
    <div id="search">
        <input id="search-input" className='mr-1' type="text" placeholder="Type in a keyword" />
        <button id="search-button" className='m-3'>Search</button>
    </div>
  )
}

export default SearchInput