import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_RENT_EXPENSE
export const addRentExpense = (rentExpense) => ({
  type: 'ADD_RENT_EXPENSE',
  rentExpense
});

export const startAddRentExpense = (expenseData = {}) => {
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
    const rentExpense = {rentName , description, rentItem, rentPhone , note , amount, createdAt };

    return database.ref('rentExpenses').push(rentExpense).then((ref) => {
      dispatch(addRentExpense({
        id: ref.key,
        ...rentExpense
      }));
    });
  };
};

// REMOVE_RENT_EXPENSE
export const removeRentExpense = ({ id } = {}) => ({
  type: 'REMOVE_RENT_EXPENSE',
  id
});

export const startRemoveRentExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`rentExpenses/${id}`).remove().then(() => {
      dispatch(removeRentExpense({ id }));
    });
  };
};

// EDIT_RENT_EXPENSE
export const editRentExpense = (id, updates) => ({
  type: 'EDIT_RENT_EXPENSE',
  id,
  updates
});

export const startEditRentExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`rentExpenses/${id}`).update(updates).then(() => {
      dispatch(editRentExpense(id, updates));
    });
  };
};

// SET_RENT_EXPENSES
export const setRentExpenses = (rentExpenses) => ({
  type: 'SET_RENT_EXPENSES',
  rentExpenses
});

export const startSetRentExpenses = () => {
  return (dispatch) => {
    return database.ref('rentExpenses').once('value').then((snapshot) => {
      const rentExpenses = [];

      snapshot.forEach((childSnapshot) => {
        rentExpenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setRentExpenses(rentExpenses));
    });
  };
};
