import React from 'react'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <div id="navBar">
        <div id="appTitle">
            <h1>Kanisa Digital</h1>
        </div>
        <div id="appSubtitle">
            <p>The App where You can Constantly Abide in the Word and in God's presence. (John 15:4)</p>
        </div>
        <SearchInput />
    </div>
  )
}

export default NavBar