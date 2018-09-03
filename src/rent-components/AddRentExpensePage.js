import React from 'react';
import { connect } from 'react-redux';
import RentExpenseForm from './RentExpenseForm';
import { startAddRentExpense } from '../actions/rentExpenses';     

export class AddRentExpensePage extends React.Component {
  onSubmit = (rentExpense) => {
    this.props.startAddRentExpense(rentExpense);
    this.props.history.push('/rentDashboard');
  };
  render() {
    return (
      <div>
        <h1>Add Rent Expense</h1>
        <RentExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddRentExpense: (rentExpense) => dispatch(startAddRentExpense(rentExpense))
});

export default connect(undefined, mapDispatchToProps)(AddRentExpensePage);
