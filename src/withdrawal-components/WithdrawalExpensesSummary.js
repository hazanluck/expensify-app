import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectWithdrawalExpenses from '../selectors/withdrawalExpenses';
import selectWithdrawalExpensesTotal from '../selectors/withdrawalExpenses-total';

export const WithdrawalExpensesSummary = ({ withdrawalExpenseCount, withdrawalExpensesTotal }) => {
  const withdrawalExpenseWord = withdrawalExpenseCount === 1 ? 'withdrawalExpense' : 'withdrawalExpenses' ;
  const formattedwithdrawalExpensesTotal = numeral(withdrawalExpensesTotal / 100).format('$0,0.00');
  
  return (
    <div>
      <h1>Viewing {withdrawalExpenseCount} {withdrawalExpenseWord} totalling {formattedwithdrawalExpensesTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visiblewithdrawalExpenses = selectWithdrawalExpenses(state.withdrawalExpenses, state.filters);

  return {
    withdrawalExpenseCount: visiblewithdrawalExpenses.length,
    withdrawalExpensesTotal: selectWithdrawalExpensesTotal(visiblewithdrawalExpenses)
  };
};

export default connect(mapStateToProps)(WithdrawalExpensesSummary);