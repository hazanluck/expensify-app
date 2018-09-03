// Expenses Reducer

const receiveExpensesReducerDefaultState = [];

export default (state = receiveExpensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_RECEIVE_EXPENSE':
      return [
        ...state,
        action.receiveExpense
      ];
    case 'REMOVE_RECEIVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_RECEIVE_EXPENSE':
      return state.map((receiveExpense) => {
        if (receiveExpense.id === action.id) {
          return {
            ...receiveExpense,
            ...action.updates
          };
        } else {
          return receiveExpense;
        };
      });
    case 'SET_RECEIVE_EXPENSES':
      return action.receiveExpenses;
    default:
      return state;
  }
};
