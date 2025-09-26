import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/gymnazu.png';
const Header = () => {
  return (
    <header className='w-full shadow-md sticky top-0 z-50'>
      <div className='flex justify-between items-center h-20 bg-gray-100'>
        <div className='flex items-center'>
          <img src={Logo} alt='Gymnazo' className='h-14 w-14 ml-7 border-[#5B3E31] border-2 rounded-full'/>
          <div className='ml-4 text-[#5B3E31]'>
            <div className='font-bold text-normal'>GYMNAZO CHRISTIAN ACADEMY</div>
            <div className='text-sm'>NOVALICHES</div>
          </div>
        </div>

        <div >
            <button className='bg-[#F4D77D] hover:bg-amber-300 text-black font-bold py-2 px-4 border-2 border-[#5B3E31] rounded-full shadow-3xl mr-10'>
                <Link to="/login">Login</Link>
                </button>
        </div>
      </div>
      <nav className='flex justify-center gap-14 bg-[#F4D77D] text-[#5B3E31] py-2 text-sm font-bold'>
        <a href="#home" className='hover:text-[#ffffff] transition duration-150'>HOME</a>
        <a href="#about-us" className='hover:text-[#ffffff] transition duration-150'>ABOUT US</a>
        <a href="#announcement" className='hover:text-[#ffffff] transition duration-150'>ANNOUNCEMENT</a>
        <a href="#contact-us" className='hover:text-[#ffffff] transition duration-150'>CONTACT US</a>
      </nav>
    </header>
  );
}

export default Header;