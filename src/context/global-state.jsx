import React, { createContext, useReducer } from 'react';
import AppReducer from './app-reducer';

// Initial state
const initialState = {
  transactions: [
      {id: 1, text: 'Auto', amount: 350000},
      {id: 2, text: 'CFE', amount: 280},
      {id: 3, text: 'NETFLIX', amount: 140},
      {id: 4, text: 'Soriana Parque Delta', amount: 2000}
  ]
}

// Create context
const GlobalContext = createContext(initialState);

// Provider component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}

export { GlobalContext, GlobalProvider };