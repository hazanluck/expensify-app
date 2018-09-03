import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class WithdrawalExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rentName: props.withdrawalExpense ? props.withdrawalExpense.rentName : '',  
      description: props.withdrawalExpense ? props.withdrawalExpense.description : '',
      rentItem: props.withdrawalExpense ? (props.withdrawalExpense.rentItem).toString(): '',
      rentPhone: props.withdrawalExpense ? (props.withdrawalExpense.rentPhone).toString(): '',
      note: props.withdrawalExpense ? props.withdrawalExpense.note : '',
      amount: props.withdrawalExpense ? (props.withdrawalExpense.amount / 100).toString() : '',
      createdAt: props.withdrawalExpense ? moment(props.withdrawalExpense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onRentNameChange = (e) => {
    const rentName = e.target.value;
    this.setState(() => ({ rentName }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onrentItemChange= (e) => {
    const rentItem = e.target.value;
    if (!rentItem || rentItem.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ rentItem }));
    }
  };
  onrentPhoneChange= (e) => {
    const rentPhone = e.target.value;
    if (!rentPhone || rentPhone.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ rentPhone }));
    }
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.rentName||!this.state.description|| !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description or amount  or withdrawalItems.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        rentName: this.state.rentName,
        description: this.state.description,
        rentItem : parseInt(this.state.rentItem, 10),
        rentPhone : parseInt(this.state.rentPhone),
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
        <input
            type="text"
            placeholder="Withdrawal UserName"
            autoFocus
            value={this.state.rentName}
            onChange={this.onRentNameChange}
          />
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="PhoneNumber (optional)"
            value={this.state.rentPhone}
            onChange={this.onrentPhoneChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <input
            type="text"
            placeholder="withdrawalItem (optional)"
            value={this.state.rentItem}
            onChange={this.onrentItemChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your withdrawalExpense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Withdrawal Expense</button>
        </form>
      </div>
    )
  }
}
