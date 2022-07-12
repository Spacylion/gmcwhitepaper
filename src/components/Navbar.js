import React, { useState, useEffect } from "react"
import { Transition } from "@headlessui/react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../images/logo.png"
import gmc10 from "../assets/gmc10.png"
import gmc9 from "../assets/gmc9.png"

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex-shrink-0'>
              <img className='h-16 w-16' src={logo} alt='' />
            </div>
            <div className='flex-1 flex justify-center mr-auto'>
              <div className='hidden md:block '>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <Link
                    id='RouterNavLink'
                    className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                    to='/'
                  >
                    Dashboard
                  </Link>
                  <Link
                    id='RouterNavLink'
                    className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                    to='/gmc'
                  >
                    Coin Tracker
                  </Link>
                  <Link
                    id='RouterNavLink'
                    className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                    to='/vault'
                  >
                    Vault
                  </Link>
                  <Link
                    id='RouterNavLink'
                    className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                    to='/NFT'
                  >
                    NFT
                  </Link>
                  <Link
                    id='RouterNavLink'
                    className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                    to='/team'
                  >
                    Team
                  </Link>
                  <Link
                    id='RouterNavLink'
                    className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                    to='/about'
                  >
                    About
                  </Link>

                  <a
                    href='https://www.dextools.io/app/ether/pair-explorer/0xf3e52ba703934299c6245d74ed0ccd11f179b669'
                    className='flex items-center justify-center transition delay-150 duration-300 ease-in-out'
                  >
                    <button
                      href='https://www.dextools.io/app/ether/pair-explorer/0xf3e52ba703934299c6245d74ed0ccd11f179b669'
                      className='animate-bounce  text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                    >
                      get $gmc
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only '>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          className='z-50'
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {(ref) => (
            <div className=' md:hidden ' id='mobile-menu'>
              <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <div className='w-full absolute'>
                  <img
                    className='absolute left-0 top-0 h-16 w-16 hover:rotate-12 transition ease-in-out delay-150 filter drop-shadow-lg flex flex-col content-center justify-center'
                    alt='/'
                    src={gmc10}
                  ></img>
                  <img
                    className='absolute right-0 top-0 h-16 w-16 hover:rotate-12 transition ease-in-out delay-150 filter drop-shadow-lg content-center justify-center'
                    alt='/'
                    src={gmc9}
                  ></img>
                </div>
                <div className='flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                  <Link
                    id='RouterNavLink'
                    className='hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                    to='/'
                  >
                    Dashboard
                  </Link>

                  <Link
                    id='RouterNavLink'
                    className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                    to='/gmc'
                  >
                    Coin Tracker
                  </Link>

                  <Link
                    id='RouterNavLink'
                    className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                    to='/vault'
                  >
                    Vault
                  </Link>
                  <Link
                    id='RouterNavLink'
                    className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                    to='/NFT'
                  >
                    NFT
                  </Link>
                  <Link
                    id='RouterNavLink'
                    className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                    to='/team'
                  >
                    Team
                  </Link>
                  <Link
                    id='RouterNavLink'
                    className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                    to='/about'
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Nav
