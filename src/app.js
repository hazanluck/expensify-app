import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { startSetRentExpenses } from './actions/rentExpenses';
import { startSetReceiveExpenses } from './actions/receiveExpenses';
import { startSetWithdrawalExpenses } from './actions/withdrawalExpenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import getVisibleRentExpenses from './selectors/rentExpenses';
import getVisibleReceiveExpenses from './selectors/receiveExpenses';
import getVisibleWithdrawalExpenses from './selectors/withdrawalExpenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses(),).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

store.dispatch(startSetReceiveExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

store.dispatch(startSetRentExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

store.dispatch(startSetWithdrawalExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
