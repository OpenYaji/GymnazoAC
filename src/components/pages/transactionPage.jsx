import React from 'react';
import CurrentBalanceCard from '../common/transaction/CurrentBalanceCard';
import PaymentMethodsCard from '../common/transaction/PaymentMethodsCard';
import PayAnalysisCard from '../common/transaction/PayAnalysisCard';
import BalanceBreakdownCard from '../common/transaction/BalanceBreakdownCard';
import PaymentHistoryTable from '../common/transaction/PaymentHistoryTable';

const TransactionPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Transaction
      </h1>
      
      {/* Main grid layout for the transaction page */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Current Balance Card (takes 2/3 of the width on large screens) */}
        <div className="lg:col-span-2">
          <CurrentBalanceCard />
        </div>
        
        {/* Payment Methods Card (takes 1/3 of the width on large screens) */}
        <div className="lg:col-span-1">
          <PaymentMethodsCard />
        </div>

        {/* Pay Analysis Card */}
        <div className="lg:col-span-1">
          <PayAnalysisCard />
        </div>

        {/* Balance Breakdown Card */}
        <div className="lg:col-span-2">
          <BalanceBreakdownCard />
        </div>

        {/* Payment History Table (takes full width) */}
        <div className="lg:col-span-3">
          <PaymentHistoryTable />
        </div>

      </div>
    </>
  );
};

export default TransactionPage;