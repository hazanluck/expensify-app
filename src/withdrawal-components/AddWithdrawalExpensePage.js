import React from 'react';
import { connect } from 'react-redux';
import WithdrawalExpenseForm from './WithdrawalExpenseForm';
import { startAddWithdrawalExpense } from '../actions/withdrawalExpenses';     

export class AddWithdrawalExpensePage extends React.Component {
  onSubmit = (withdrawalExpense) => {
    this.props.startAddWithdrawalExpense(withdrawalExpense);
    this.props.history.push('/withdrawalDashboard');
  };
  render() {
    return (
      <div>
        <h1>Add Withdrawal Expense</h1>
        <WithdrawalExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddWithdrawalExpense: (withdrawalExpense) => dispatch(startAddWithdrawalExpense(withdrawalExpense))
});

export default connect(undefined, mapDispatchToProps)(AddWithdrawalExpensePage);
