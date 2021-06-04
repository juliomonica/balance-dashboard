import React, { useContext } from 'react';
import Transaction from '../movimiento/movimiento.component';

import { GlobalContext } from '../../context/global-state';

import "./movimientos.styles.css";

const Movimientos = () => {

  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <div className="movimientos-container">
        <h4 className="movimientos-text">Tus movimientos</h4>
        <h4 className="ver-todos">Ver todos</h4>
      </div>
      <div>
        <ul className="lista-movimientos">
          <li className="historial-movimientos">
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
          </li>
        </ul>
      </div>
    </>
  );
};
export default Movimientos;
