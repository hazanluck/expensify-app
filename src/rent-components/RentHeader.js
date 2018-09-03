import React from 'react';
import { NavLink } from 'react-router-dom';

const RentHeader = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/rentDashboard" activeClassName="is-active" exact={true}>Rent Dashboard</NavLink>
    <NavLink to="/createRent" activeClassName="is-active">Create Rent Expense</NavLink>
  </header>
);

export default RentHeader;