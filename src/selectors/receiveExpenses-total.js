export default (receiveExpenses) => {
    return receiveExpenses
        .map((receiveExpense) => receiveExpense.amount)
        .reduce((sum, value) => sum + value, 0);
  };