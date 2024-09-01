// import React from 'react'
// import { Link } from 'react-router-dom'
// import Logo from "../assets/schoolinfo.png"

// const Navbar = () => {
//     return (
//         <div className='flex justify-around items-center py-4'>
//             <div><img src={Logo} alt="SchoolInfo Logo" /></div>
//             <ul className='flex justify-around gap-10'>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/schools">Schools</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//             </ul>
//             <div className="flex justify-center mt-5">
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     className="w-72 p-2 text-lg rounded border border-gray-300"
//                 />
//             </div>
//         </div>
//     )
// }

// export default Navbar

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/schoolinfo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    // Close dropdown when navigating to a new page
    useEffect(() => {
        setIsDropdownOpen(false);
        setIsOpen(false);
    }, [location]);

    return (
        <nav className='bg-white shadow-lg py-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16'>
                <div className='flex-shrink-0'>
                    <img src={Logo} alt="SchoolInfo Logo" className='h-auto w-auto' />
                </div>
                <div className='hidden md:flex items-center space-x-10'>
                    <Link to="/" className='text-gray-700 hover:text-green-500'>Home</Link>
                    <div className='relative'>
                        <button 
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                            className='text-gray-700 hover:text-green-500 flex items-center'>
                            Schools
                            <svg className='ml-2 h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className='absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10'>
                                <Link to="/private" className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>Private</Link>
                                <Link to="/public" className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>Public</Link>
                                <Link to="/boarding" className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>Boarding</Link>
                                <Link to="/madrassa" className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>Madrassa</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/about" className='text-gray-700 hover:text-green-500'>About</Link>
                    <Link to="/contact" className='text-gray-700 hover:text-green-500'>Contact</Link>
                </div>
                <div className="hidden md:flex justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-72 p-2 text-lg rounded border border-gray-300"
                    />
                </div>
                <div className='md:hidden'>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='text-gray-700 hover:text-green-500 focus:outline-none'
                    >
                        <svg className='h-8 w-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link to="/" className='block text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-base font-medium'>Home</Link>
                        <button 
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                            className='text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-base font-medium flex items-center'>
                            Schools
                            <svg className='ml-2 h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className='space-y-1'>
                                <Link to="/private" className='block text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-base font-medium'>Private</Link>
                                <Link to="/public" className='block text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-base font-medium'>Public</Link>
                                <Link to="/boarding" className='block text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-base font-medium'>Boarding</Link>
                                <Link to="/madrassa" className='block text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-base font-medium'>Madrassa</Link>
                            </div>
                        )}
                        <Link to="/about" className='block text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-base font-medium'>About</Link>
                        <Link to="/contact" className='block text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-base font-medium'>Contact</Link>
                        <div className="flex justify-center">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-72 p-2 text-lg rounded border border-gray-300"
                            />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
