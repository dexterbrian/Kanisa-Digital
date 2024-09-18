import React from 'react'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <div id="navBar" className='mb-6 flex flex-row justify-between'>
        <div>
            <h1 id="appTitle" className='text-5xl'><strong>Kanisa Digital</strong></h1>
            <p id='appSubtitle' className='text-sm'>The App for Christians. (John 15:4)</p>
        </div>
        <SearchInput />
    </div>
  )
}

export default NavBar