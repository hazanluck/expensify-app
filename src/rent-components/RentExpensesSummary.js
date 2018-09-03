import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectRentExpenses from '../selectors/rentExpenses';
import selectRentExpensesTotal from '../selectors/rentExpenses-total';

export const RentExpensesSummary = ({ rentExpenseCount, rentExpensesTotal }) => {
  const rentExpenseWord = rentExpenseCount === 1 ? 'rentExpense' : 'rentExpenses' ;
  const formattedrentExpensesTotal = numeral(rentExpensesTotal / 100).format('$0,0.00');
  
  return (
    <div>
      <h1>Viewing {rentExpenseCount} {rentExpenseWord} totalling {formattedrentExpensesTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visiblerentExpenses = selectRentExpenses(state.rentExpenses, state.filters);

  return {
    rentExpenseCount: visiblerentExpenses.length,
    rentExpensesTotal: selectRentExpensesTotal(visiblerentExpenses)
  };
};

export default connect(mapStateToProps)(RentExpensesSummary);