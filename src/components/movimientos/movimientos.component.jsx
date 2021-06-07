import React, { useContext } from 'react';
import Transaction from '../movimiento/movimiento.component';

import { GlobalContext } from '../../context/global-state';

import "./movimientos.styles.css";

const Movimientos = () => {

  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <div className="movimientos-container">
        <div className="movimientos-text">Tus movimientos</div>
        <div className="ver-todos">Ver todos</div>
      </div>
      <div className="historial-movimientos">
        <ul className="lista-movimientos">
          <li>
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
          </li>
        </ul>
      </div>
    </>
  );
};
export default Movimientos;
