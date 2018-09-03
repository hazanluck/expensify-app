import React from 'react';
import { connect } from 'react-redux';
import ReceiveExpenseListItem from './ReceiveExpenseListItem';
import selectReceiveExpenses from '../selectors/receiveExpenses';

export const ReceiveExpenseList = (props) => (
  <div>
    {
      props.receiveExpenses.length === 0 ? (
        <p>No receive expenses</p>
      ) : (
          props.receiveExpenses.map((receiveExpense) => {
            return <ReceiveExpenseListItem key={receiveExpense.id} {...receiveExpense} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    receiveExpenses: selectReceiveExpenses(state.receiveExpenses, state.filters)
  };
};

export default connect(mapStateToProps)(ReceiveExpenseList);