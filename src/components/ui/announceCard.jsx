import React from 'react'

const announceCard = () => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white dark:bg-gray-800 bg-clip-border text-gray-700 dark:text-gray-300 shadow-md dark:shadow-gray-900/50 transition-colors duration-300">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-base-brown shadow-lg shadow-blue-gray-500/40 dark:shadow-gray-900/50 bg-[#b9b196] dark:bg-gray-700 transition-colors duration-300">
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-gray-100 antialiased transition-colors duration-300">
         Class Suspension
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. 
        </p>
      </div>
      <div className="p-6 pt-0">
        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-[#F4D77D] dark:bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-base-brown dark:text-gray-900 shadow-md shadow-blue-500/20 dark:shadow-gray-900/50 transition-all hover:shadow-lg hover:shadow-blue-500/40 dark:hover:shadow-gray-900/70 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none duration-300">
          Read More
        </button>
      </div>
    </div>
  )
}

export default announceCard