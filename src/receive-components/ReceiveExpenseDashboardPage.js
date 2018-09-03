import React from 'react';
import ReceiveExpenseList from './ReceiveExpenseList';
import ReceiveExpenseListFilters from './ReceiveExpenseListFilters';
import ReceiveExpensesSummary from './ReceiveExpensesSummary';

const ReceiveExpenseDashboardPage = () => (
  <div>
    <ReceiveExpensesSummary />
    <ReceiveExpenseListFilters />
    <ReceiveExpenseList />
  </div>
  
);

export default ReceiveExpenseDashboardPage;