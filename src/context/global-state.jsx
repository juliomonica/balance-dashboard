import React, { createContext, useReducer } from 'react';
import AppReducer from './app-reducer';
import car from '../assets/car.png';
import CFE from '../assets/cfe.png';
import NETFLIX from '../assets/NETFLIX.png';
import Soriana from '../assets/Soriana.png';
// Initial state
const initialState = {
  transactions: [
      {id: 1, image: car, text: 'Auto', subtext: 'Mis logros',date:"2m", amount: 350000},
      {id: 2, image: CFE, text: 'CFE', subtext: 'Pago de servicio',date:"Ayer", amount: 280},
      {id: 3, image: NETFLIX, text: 'NETFLIX', subtext: 'Subscripciones',date:"28 de dic", amount: 140},
      {id: 4, image: Soriana, text: 'Soriana Parque Delta', subtext: 'Subscripcion TDC',date:"26 de dic", amount: 2000}
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