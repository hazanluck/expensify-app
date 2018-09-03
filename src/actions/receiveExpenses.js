import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_RECEIVE_EXPENSE
export const addReceiveExpense = (receiveExpense) => ({
  type: 'ADD_RECEIVE_EXPENSE',
  receiveExpense
});

export const startAddReceiveExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      rentName = '',  
      description = '',
      rentItem = '',
      rentPhone = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const receiveExpense = {rentName , description, rentItem, rentPhone , note , amount, createdAt };

    return database.ref('receiveExpenses').push(receiveExpense).then((ref) => {
      dispatch(addReceiveExpense({
        id: ref.key,
        ...receiveExpense
      }));
    });
  };
};

// REMOVE_RECEIVE_EXPENSE
export const removeReceiveExpense = ({ id } = {}) => ({
  type: 'REMOVE_RECEIVE_EXPENSE',
  id
});

export const startRemoveReceiveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`receiveExpenses/${id}`).remove().then(() => {
      dispatch(removeReceiveExpense({ id }));
    });
  };
};

// EDIT_RECEIVE_EXPENSE
export const editReceiveExpense = (id, updates) => ({
  type: 'EDIT_RECEIVE_EXPENSE',
  id,
  updates
});

export const startEditReceiveExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`receiveExpenses/${id}`).update(updates).then(() => {
      dispatch(editReceiveExpense(id, updates));
    });
  };
};

// SET_RECEIVE_EXPENSES
export const setReceiveExpenses = (receiveExpenses) => ({
  type: 'SET_RECEIVE_EXPENSES',
  receiveExpenses
});

export const startSetReceiveExpenses = () => {
  return (dispatch) => {
    return database.ref('receiveExpenses').once('value').then((snapshot) => {
      const receiveExpenses = [];

      snapshot.forEach((childSnapshot) => {
        receiveExpenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setReceiveExpenses(receiveExpenses));
    });
  };
};
