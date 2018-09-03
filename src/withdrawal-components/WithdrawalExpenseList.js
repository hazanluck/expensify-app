import React from 'react';
import { connect } from 'react-redux';
import WithdrawalExpenseListItem from './WithdrawalExpenseListItem';
import selectWithdrawalExpenses from '../selectors/withdrawalExpenses';

export const WithdrawalExpenseList = (props) => (
  <div>
    {
      props.withdrawalExpenses.length === 0 ? (
        <p>No withdrawal expenses</p>
      ) : (
          props.withdrawalExpenses.map((withdrawalExpense) => {
            return <WithdrawalExpenseListItem key={withdrawalExpense.id} {...withdrawalExpense} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    withdrawalExpenses: selectWithdrawalExpenses(state.withdrawalExpenses, state.filters)
  };
};

export default connect(mapStateToProps)(WithdrawalExpenseList);