import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import RentExpenseDashboardPage from '../rent-components/RentExpenseDashboardPage';
import ReceiveExpenseDashboardPage from '../receive-components/ReceiveExpenseDashboardPage';
import WithdrawalExpenseDashboardPage from '../withdrawal-components/WithdrawalExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import AddRentExpensePage from '../rent-components/AddRentExpensePage';
import AddReceiveExpensePage from '../receive-components/AddReceiveExpensePage';
import AddWithdrawalExpensePage from '../withdrawal-components/AddWithdrawalExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import EditRentExpensePage from '../rent-components/EditRentExpensePage';
import EditReceiveExpensePage from '../receive-components/EditReceiveExpensePage';
import EditWithdrawalExpensePage from '../withdrawal-components/EditWithdrawalExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import RentHeader from '../rent-components/RentHeader';
import ReceiveHeader from '../receive-components/ReceiveHeader';
import WithdrawalHeader from '../withdrawal-components/WithdrawalHeader';

const AppRouter = () => (
  <BrowserRouter>
  <div>
  <Header />
  <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact={true} />
    <Route path="/create" component={AddExpensePage} />
    <Route path="/edit/:id" component={EditExpensePage} />
    <Route path="/help" component={HelpPage} />
    <Route component={NotFoundPage} />
  </Switch>
  <RentHeader />
      <Switch>
        <Route path="/rentDashboard" component={RentExpenseDashboardPage} exact={true} />
        <Route path="/createRent" component={AddRentExpensePage} />
        <Route path="/editRent/:id" component={EditRentExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    <ReceiveHeader />
      <Switch>
        <Route path="/receiveDashboard" component={ReceiveExpenseDashboardPage} exact={true} />
        <Route path="/createReceive" component={AddReceiveExpensePage} />
        <Route path="/editReceive/:id" component={EditReceiveExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    <WithdrawalHeader />
      <Switch>
        <Route path="/withdrawalDashboard" component={WithdrawalExpenseDashboardPage} exact={true} />
        <Route path="/createWithdrawal" component={AddWithdrawalExpensePage} />
        <Route path="/editWithdrawal/:id" component={EditWithdrawalExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
 </div>
  
  </BrowserRouter>
);

export default AppRouter;
