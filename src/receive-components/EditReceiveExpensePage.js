import React from 'react';
import { connect } from 'react-redux';
import ReceiveExpenseForm from './ReceiveExpenseForm';
import { startEditReceiveExpense, startRemoveReceiveExpense  } from '../actions/receiveExpenses';

export class EditReceiveExpensePage extends React.Component {
  onSubmit = (receiveExpense) => {
    this.props.startEditReceiveExpense(this.props.receiveExpense.id, receiveExpense);
    this.props.history.push('/receiveDashboard');
  };
  onRemove = () => {
    this.props.startRemoveReceiveExpense({ id: this.props.receiveExpense.id });
    this.props.history.push('/receiveDashboard');
  };
  render() {
    return (
      <div>
        <ReceiveExpenseForm
        receiveExpense={this.props.receiveExpense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
    receiveExpense : state.receiveExpenses.find((receiveExpense) => receiveExpense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditReceiveExpense: (id, receiveExpense) => dispatch(startEditReceiveExpense(id, receiveExpense)),
  startRemoveReceiveExpense: (data) => dispatch(startRemoveReceiveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditReceiveExpensePage);
