import React from 'react';
import { NavLink } from 'react-router-dom';

const WithdrawalHeader = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/withdrawalDashboard" activeClassName="is-active" exact={true}>Withdrawal Dashboard</NavLink>
    <NavLink to="/createWithdrawal" activeClassName="is-active">Create Withdrawal Expense</NavLink>
  </header>
);

export default WithdrawalHeader;