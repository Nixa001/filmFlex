import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='absolute w-full bg-black p-4 flex items-center justify-between z-50'>
            <Link to="/">
                <h1 className='uppercase font-netflix-regular font-bold cursor-pointer text-5xl text-orange-500'>filmflex</h1>
            </Link>
            <div>
                <Link to="/login">
                    <button className='capitalize border border-opacity-5 mr-2 text-xl px-5 py-2 rounded-md hover:bg-gray-600'>login</button>
                </Link>
                <Link to="/signup">
                    <button className='capitalize border border-orange-500  bg-orange-500 text-xl px-5 py-2 rounded-md hover:bg-gray-600 hover:border-gray-600'>sign up</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar