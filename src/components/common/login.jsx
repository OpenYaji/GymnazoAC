import React from 'react';
import Logo from '../../assets/img/gymnazu.png'; 
import Bg from '../../assets/img/bg.png'; 
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center md:items-start justify-center md:pt-2">
      
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="absolute inset-0 bg-stone-900/60 dark:bg-black/70 z-0 transition-colors duration-300"></div>
      </div>

      <div className="relative z-10 w-full top-8 max-w-sm mx-4 p-6 rounded-xl shadow-xl bg-stone-800/60 dark:bg-gray-900/70 border border-stone-700 dark:border-gray-600 backdrop-blur-sm transform scale-[0.9] sm:scale-100 transition-colors duration-300">
        <Link to="/">
          <button className="absolute top-3 right-3 text-gray-100 hover:text-white dark:hover:text-amber-400 transition">
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </Link>

        <div className="flex flex-col items-center mb-4">
          <img src={Logo} alt="Logo" className="w-16 h-16 mb-2 object-contain" />
          <h2 className="text-lg font-bold uppercase text-white tracking-wider">LOGIN</h2>
        </div>

        <form className="space-y-4">
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Enter your ID number" 
              className="w-full pl-12 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-yellow-500 dark:focus:ring-amber-400 focus:border-yellow-500 dark:focus:border-amber-400 transition duration-300 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700 shadow-sm text-sm"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </span>
          </div>

          <div>
            <div className="relative">
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full pl-12 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-yellow-500 dark:focus:ring-amber-400 focus:border-yellow-500 dark:focus:border-amber-400 transition duration-300 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700 shadow-sm text-sm"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a3 3 0 106 0v-3a3 3 0 00-6 0v3z"></path></svg>
              </span>
            </div>
            <div className="text-right mt-1">
              <a href="#" className="text-xs text-gray-300 dark:text-gray-400 hover:text-yellow-400 dark:hover:text-amber-400 transition duration-300">Forgot Password?</a>
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              className="w-full py-3 text-gray-800 dark:text-gray-900 font-semibold rounded-full bg-[#FEEB8A] dark:bg-amber-400 hover:bg-yellow-400 dark:hover:bg-amber-300 transition duration-300 shadow-lg text-base"
            >
              LOGIN
            </button>
          </div>
        </form>

        <div className="text-center mt-4 text-xs text-gray-200 dark:text-gray-300">
          Need help? Contact the, <a href="#" className="font-semibold text-[#F7C236] dark:text-amber-400 hover:underline"><Link to="/#contact-us">
          School Office </Link></a>
        </div>
      </div>
    </div>
  );
}

export default Login;