import React from 'react';

const BalanceBreakdownCard = () => {
  const breakdownItems = [
    { description: 'Tuition Fee', amount: 5400 },
    { description: 'Uniform', amount: 3600 },
    { description: 'Contribution/TGS', amount: 1400 },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-6 shadow-md h-full flex flex-col">
      <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4">Balance Breakdown</h3>
      <div className="flex-grow space-y-3">
        {breakdownItems.map((item) => (
          <div key={item.description} className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">{item.description}</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              ₱ {item.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </span>
          </div>
        ))}
      </div>

      <div className="relative group mt-4">
        <button className="w-full bg-[#F3D67D] text-stone-900 font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
          Pay
        </button>

        <span className="
          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          bg-gray-900 text-white text-xs font-bold 
          rounded-md px-2 py-1 
          opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
          transition-all duration-300 ease-in-out
          whitespace-nowrap
          z-10
        ">
          Proceed to Payment Portal
        </span>
      </div>

    </div>
  );
};

export default BalanceBreakdownCard;