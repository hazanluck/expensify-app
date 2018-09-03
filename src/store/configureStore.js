import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import rentExpensesReducer from '../reducers/rentExpenses';
import receiveExpensesReducer from '../reducers/receiveExpenses';
import withdrawalExpensesReducer from '../reducers/withdrawalExpenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      rentExpenses: rentExpensesReducer,
      receiveExpenses: receiveExpensesReducer,
      withdrawalExpenses: withdrawalExpensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
