import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, TextInput, Dropdown, DropdownItem, DropdownDivider, Button } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu,setShowMenu]= useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu=()=>{
    setShowMenu(!showMenu);
  };

  return (
    <Navbar className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 border-b-2'>
      <Link to="/" className='flex space-x-3'>
          <img src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg" className='h-9 w-10 rounded-full'  />
          <span className='text-2xl font-semibold whitespace-nowrap dark:text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-500 text-white rounded-lg px-2 py-1'>
            School Management System
          </span>
        </Link>
      <div className='max-w-screen-xl flex flex-wrap justify-between mx-auto p-4'>
        
        <Button
          onClick={() => toggleDropdown()}
          className='sm:inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        >
          <span className='sr-only'>Open main menu</span>
          <svg className='w-5 h-5' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </Button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto flex justify-between`} id="navbar-dropdown">
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-5 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 gap-4'>
            <li>
              <Link to="/" className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent' aria-current="page">
                Home
              </Link>
            </li>
            <li className='relative'>
              <button
                onClick={toggleMenu}
                className='flex justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
              >
                 Menu
                <svg className='w-2.5 h-2.5 ml-2.5' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {showMenu && (
                <div className='z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'>
                  <ul className='py-2 text-sm text-gray-700 dark:text-gray-400'>
                    <li>
                      <Link to="createstudent" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                        Add Student
                      </Link>
                    </li>
                    <li>
                      <Link to="updatestudent" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                        Update Student
                      </Link>
                    </li>
                    <li>
                      <Link to="search" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                        Search
                      </Link>
                    </li>
                    <li>
                    <Link to="deletestudent" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                      Delete Student
                    </Link>
                    </li>
                  </ul>
                  
                </div>
              )}
            </li>
           
            
            <li>
              <Link to="#" className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
}
