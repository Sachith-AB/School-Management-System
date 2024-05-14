import { Button, Navbar, TextInput, Dropdown, Avatar, DropdownDivider, DropdownItem, theme } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import React, { useState } from 'react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add your theme toggle logic here
  };

  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Sachith's
        </span>
        Blog
      </Link>
      <form className='hidden lg:flex'>
        <TextInput
          type='text'
          placeholder='Search...'
          icon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as='div'>
          <Link>Home</Link>
        </Navbar.Link>
        <Navbar.Link as='div'>
          <Link >Update details</Link>
        </Navbar.Link>
        <Navbar.Link as='div'>
          <Link >Student Details</Link>
        </Navbar.Link>
        <Navbar.Link active="/deletepage" as='div'>
          <Link >Delete Student</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
