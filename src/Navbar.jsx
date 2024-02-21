import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='bg-lime-500 h-12'>
            <div className='max-w-6xl mx-auto flex justify-between items-center h-full'>
                <div>
                    <h1 className='text-2xl text-lime-800 font font-extrabold tracking-wider'>Shadow Share</h1>
                </div>
                <div className='flex gap-4'>
                    <Link className='bg-lime-800 text-white px-3 py-1 rounded-lg hover:bg-lime-200 hover:text-lime-300 ' to="/SignUp">signup</Link>
                    <Link className='bg-lime-800 text-white px-3 py-1 rounded-lg hover:bg-lime-200 hover:text-lime-300 ' to="/LoginPage">Login</Link>
                </div>
            </div>

        </nav>
    </div>
  )
}

export default Navbar