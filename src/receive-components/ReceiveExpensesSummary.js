import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectReceiveExpenses from '../selectors/receiveExpenses';
import selectReceiveExpensesTotal from '../selectors/receiveExpenses-total';

export const ReceiveExpensesSummary = ({ receiveExpenseCount, receiveExpensesTotal }) => {
  const receiveExpenseWord = receiveExpenseCount === 1 ? 'receiveExpense' : 'receiveExpenses' ;
  const formattedreceiveExpensesTotal = numeral(receiveExpensesTotal / 100).format('$0,0.00');
  
  return (
    <div>
      <h1>Viewing {receiveExpenseCount} {receiveExpenseWord} totalling {formattedreceiveExpensesTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visiblereceiveExpenses = selectReceiveExpenses(state.receiveExpenses, state.filters);

  return {
    receiveExpenseCount: visiblereceiveExpenses.length,
    receiveExpensesTotal: selectReceiveExpensesTotal(visiblereceiveExpenses)
  };
};

export default connect(mapStateToProps)(ReceiveExpensesSummary);