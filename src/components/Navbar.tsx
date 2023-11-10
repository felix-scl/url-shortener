import { useState } from 'react';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='flex'>
      <button
        className='space-y-1.5 p-2 rounded-md hocus:bg-white group transition-colors duration-200'
        onClick={() => setToggleMenu((prevToggle) => !prevToggle)}
        aria-label={`${toggleMenu ? 'Close' : 'Open'} menu`}
      >
        <span className='block h-0.5 w-8 bg-white group-hover:bg-black group-focus:bg-black transition-colors duration-200'></span>
        <span className='block h-0.5 w-5 bg-white mx-auto group-hover:bg-black group-focus:bg-black transition-colors duration-200'></span>
        <span className='block h-0.5 w-8 bg-white group-hover:bg-black group-focus:bg-black transition-colors duration-200'></span>
      </button>
    </nav>
  );
}
