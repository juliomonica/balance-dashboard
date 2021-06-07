import React, { useContext } from 'react';
import { GlobalContext } from '../../context/global-state';

import './balance.styles.css';
//Money formatter function
function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
      '$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    );
  }

const Balance = (props) => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    //const total = 1499970;
    
    return (
        <>
            <h4 className="texto-saldo">{props.balanceTexto}</h4>
            {/* <h1 className="saldo">$1,499,970.00</h1> */}
            <h1 className="saldo">{moneyFormatter(total)}</h1>
            
        </>
    )
}
export default Balance;