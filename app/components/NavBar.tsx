import React from 'react'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <div id="navBar" className='m-3 flex flex-row justify-between'>
        <div>
            <h1 id="appTitle" className='text-3xl'><strong>Kanisa Digital</strong></h1>
            <p id='appSubtitle' className='text-sm'>The App for Christians. (John 15:4)</p>
        </div>
        <SearchInput />
    </div>
  )
}

export default NavBar