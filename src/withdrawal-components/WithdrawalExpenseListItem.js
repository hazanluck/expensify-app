import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const WithdrawalExpenseListItem = ({ id, rentName , rentPhone , rentItem, description, amount, createdAt }) => (
  <div>
    <Link to={`/editWithdrawal/${id}`}>
      <h3>{description}</h3>
      
    </Link>
    <p>
      {numeral(amount / 100).format('$0,0.00')}
      -
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
    <p>
        {numeral(rentItem).format('0,0')}
   </p>
    
  </div>
);

export default WithdrawalExpenseListItem;
