import React from 'react';
import { connect } from 'react-redux';
import RentExpenseForm from './RentExpenseForm';
import { startEditRentExpense, startRemoveRentExpense  } from '../actions/rentExpenses';

export class EditRentExpensePage extends React.Component {
  onSubmit = (rentExpense) => {
    this.props.startEditRentExpense(this.props.rentExpense.id, rentExpense);
    this.props.history.push('/rentDashboard');
  };
  onRemove = () => {
    this.props.startRemoveRentExpense({ id: this.props.rentExpense.id });
    this.props.history.push('/rentDashboard');
  };
  render() {
    return (
      <div>
        <RentExpenseForm
          rentExpense={this.props.rentExpense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  rentExpense: state.rentExpenses.find((rentExpense) => rentExpense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditRentExpense: (id, rentExpense) => dispatch(startEditRentExpense(id, rentExpense)),
  startRemoveRentExpense: (data) => dispatch(startRemoveRentExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRentExpensePage);
