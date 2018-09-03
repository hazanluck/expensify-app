import React from 'react';
import { NavLink } from 'react-router-dom';

const ReceiveHeader = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/receiveDashboard" activeClassName="is-active" exact={true}>Receive Dashboard</NavLink>
    <NavLink to="/createReceive" activeClassName="is-active">Create Receive Expense </NavLink>
  </header>
);

export default ReceiveHeader;