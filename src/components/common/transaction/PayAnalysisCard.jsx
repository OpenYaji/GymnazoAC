import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const PayAnalysisCard = () => {
  const data = [
    { name: 'Paid', value: 60, color: '#10B981' }, // green-500
    { name: 'Pending', value: 25, color: '#F59E0B' }, // amber-500
    { name: 'Overdue', value: 15, color: '#EF4444' }, // red-500
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-slate-900 p-2 border border-gray-200 dark:border-slate-700 rounded-md shadow-lg">
          <p className="font-bold text-gray-800 dark:text-gray-100">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-6 shadow-md h-full">
      <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4">Pay Analysis</h3>
      <div className="h-48 w-full mb-4">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              cornerRadius={8}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-4 text-xs">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
            <span className="text-gray-600 dark:text-gray-400">{item.name}</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayAnalysisCard;