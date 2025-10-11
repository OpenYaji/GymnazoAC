import React from 'react';
import { Calendar, ChevronsUpDown, Banknote } from 'lucide-react';

const PaymentHistoryTable = () => {
  const history = [
    { purpose: 'Tuition', method: 'Cash', dateTime: '08/24/2025 10:00AM', cost: 5400, status: 'Paid' },
    { purpose: 'Uniform', method: 'Cash', dateTime: '08/24/2025 10:00AM', cost: 3600, status: 'Paid' },
    { purpose: 'Books/Notebook', method: 'GCash', dateTime: '08/24/2025 10:00AM', cost: 1200, status: 'Paid' },
    { purpose: 'ID', method: 'Cash', dateTime: '08/24/2025 10:00AM', cost: 200, status: 'Pending' },
  ];

  const statusColors = {
    Paid: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    Pending: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  };

  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-6 shadow-md">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <h3 className="font-bold text-gray-800 dark:text-gray-100">Payment History</h3>
        <div className="flex items-center gap-2">

          <div className="relative group">
            <button className="flex items-center gap-1.5 text-sm font-semibold bg-gray-100 dark:bg-slate-700 px-3 py-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors">
              <Calendar size={16} /> Date
            </button>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs font-bold rounded-md px-2 py-1 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out whitespace-nowrap z-10">
              Filter by date
            </span>
          </div>
          
          <div className="relative group">
            <button className="flex items-center gap-1.5 text-sm font-semibold bg-gray-100 dark:bg-slate-700 px-3 py-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors">
              <ChevronsUpDown size={16} /> Total
            </button>
             <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs font-bold rounded-md px-2 py-1 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out whitespace-nowrap z-10">
              Sort by cost
            </span>
          </div>

        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-200 dark:border-slate-700 text-gray-500 dark:text-gray-400">
            <tr>
              <th className="p-3 font-medium">Purpose</th>
              <th className="p-3 font-medium">Method</th>
              <th className="p-3 font-medium">Date/Time</th>
              <th className="p-3 font-medium">Cost</th>
              <th className="p-3 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index} className="border-b border-gray-100 dark:border-slate-700/50">
                <td className="p-3 font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-3">
                  <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full">
                    <Banknote size={16} className="text-orange-500" />
                  </div>
                  {item.purpose}
                </td>
                <td className="p-3 text-gray-600 dark:text-gray-400">{item.method}</td>
                <td className="p-3 text-gray-600 dark:text-gray-400">{item.dateTime}</td>
                <td className="p-3 text-gray-600 dark:text-gray-400">₱ {item.cost.toLocaleString()}</td>
                <td className="p-3 text-right">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${statusColors[item.status]}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;