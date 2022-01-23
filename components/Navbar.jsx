/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <> 
      <nav className='flex items-center flex-wrap bg-orange-400 p-1 justify-center mb-24'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-orange font-bold uppercase tracking-wide  ml-8'>
			  <Image src="/assets/logo.png" alt="" width="328" height="56" />
            </span>
			
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-orange-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto text-center mr-8`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center content-center items-start  flex flex-col lg:h-auto mr-3.5'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full font-sans hover:font-serif px-3 py-2 text-center content-center rounded text-white text-2xl font-bold items-center justify-center hover:bg-orange-300 hover:text-white mr-3.5'>
                ABOUT
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full font-sans hover:font-serif px-3 py-2 text-center rounded text-white text-2xl font-bold items-center justify-center hover:bg-orange-300 hover:text-white mr-3.5'>
                SCHEDULE
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full font-sans hover:font-serif px-3 py-2  text-center rounded text-white text-2xl font-bold items-center justify-center hover:bg-orange-300 hover:text-white mr-3.5'>
                PROJECT
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full font-sans hover:font-serif px-3 py-2 text-center rounded text-white text-2xl font-bold items-center justify-center hover:bg-orange-300 hover:text-white mr-3.5'>
                FAQ
              </a>
            </Link>
			<Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full font-sans hover:font-serif px-3 py-2 text-center rounded text-white text-2xl font-bold items-center justify-center hover:bg-orange-300 hover:text-white mr-3.5'>
                TEAM
              </a>
            </Link>
			<Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full font-sans hover:font-serif px-3 py-2 mr-30 text-center rounded text-white text-2xl font-bold items-center justify-center hover:bg-orange-300 hover:text-white mr-3.5'>
                CONTACT
              </a>
            </Link>


            
          </div>
        </div>

        
      </nav>
    </>
  );
};


export default Navbar;
