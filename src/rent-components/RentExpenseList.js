import React from 'react';
import { connect } from 'react-redux';
import RentExpenseListItem from './RentExpenseListItem';
import selectRentExpenses from '../selectors/rentExpenses';

export const RentExpenseList = (props) => (
  <div>
    {
      props.rentExpenses.length === 0 ? (
        <p>No rent expenses</p>
      ) : (
          props.rentExpenses.map((rentExpense) => {
            return <RentExpenseListItem key={rentExpense.id} {...rentExpense} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    rentExpenses: selectRentExpenses(state.rentExpenses, state.filters)
  };
};

export default connect(mapStateToProps)(RentExpenseList);