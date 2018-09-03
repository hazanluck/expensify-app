import React from 'react';
import { connect } from 'react-redux';
import ReceiveExpenseForm from './ReceiveExpenseForm';
import { startAddReceiveExpense } from '../actions/receiveExpenses';     

export class AddReceiveExpensePage extends React.Component {
  onSubmit = (receiveExpense) => {
    this.props.startAddReceiveExpense(receiveExpense);
    this.props.history.push('/receiveDashboard');
  };
  render() {
    return (
      <div>
        <h1>Add Receive Expense</h1>
        <ReceiveExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddReceiveExpense: (receiveExpense) => dispatch(startAddReceiveExpense(receiveExpense))
});

export default connect(undefined, mapDispatchToProps)(AddReceiveExpensePage);
