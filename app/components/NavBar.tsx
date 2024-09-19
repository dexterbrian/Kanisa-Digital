import React from 'react'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <div className="navbar flex-row justify-between">
      <div className="flex flex-col">
        <a className="btn btn-ghost text-5xl">Kanisa Digital</a>
        <p id='appSubtitle' className='text-sm'>The App for Christians. (John 15:4)</p>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
      </div>
    </div>
  )
}

export default NavBar