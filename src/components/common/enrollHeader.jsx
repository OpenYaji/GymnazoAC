import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/gymnazu.png';

const enrollHeader = () => {
  return (
    <header className='w-full shadow-md sticky top-0 z-50'>
      <div className='flex justify-between items-center h-16 sm:h-20 bg-gray-100 dark:bg-gray-800 px-4 sm:px-0 transition-colors duration-300'>
        <div className='flex items-center'>
          <img src={Logo} alt='Gymnazo' className='h-10 w-10 sm:h-14 sm:w-14 sm:ml-7 border-[#5B3E31] dark:border-amber-400 border-2 rounded-full'/>
          <div className='ml-2 sm:ml-4 text-[#5B3E31] dark:text-amber-400 transition-colors duration-300'>
            <div className='font-bold text-xs sm:text-base'>GYMNAZO CHRISTIAN ACADEMY</div>
            <div className='text-[10px] sm:text-sm'>NOVALICHES</div>
          </div>
        </div>
        <div className='flex items-center space-x-2 sm:space-x-6 sm:mr-10'> 
          <Link 
            to="/" 
            className='flex items-center gap-2 text-[#5B3E31] dark:text-amber-400 font-bold hover:text-[#F4D77D] dark:hover:text-amber-300 transition duration-150 text-sm group'
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className='hidden sm:inline'>Back to Home</span>
          </Link>
          <button className='bg-[#F4D77D] dark:bg-amber-500 hover:bg-amber-300 dark:hover:bg-amber-400 text-black font-bold py-2 px-4 border-2 border-[#5B3E31] dark:border-amber-600 rounded-full shadow-3xl text-xs sm:text-sm transition-colors duration-300'>
            <Link to="/login">LOGIN</Link>
          </button>
        </div>
      </div>
      <div className='h-8 sm:h-8 bg-[#F4D77D] dark:bg-gray-700 flex items-center justify-center py-2 transition-colors duration-300'>
        <h1 className='text-center text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#5B3E31] dark:text-amber-400 px-4 transition-colors duration-300'>
            STUDENT ADMISSION
        </h1>
      </div>
    </header>
  )
}

export default enrollHeader