import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='bg-rose-400 text-black justify-between flex px-4 p-3'>
        <Link to={"/"} className='font-bold text-5xl'>Nooty</Link>
        <Link to={"/addnote"} className='bg-white px-5 py-3 text-center rounded text-black '>Add Note</Link>
    </div>
  )
}

export default Header