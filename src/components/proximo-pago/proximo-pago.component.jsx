import React from 'react';

import './proximo-pago.styles.css';
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

  
  const ProximoPago = () => {
  
      const total = 28860;
      
      return (
          <div className="proximo-pago-container">
              <h4 className="proximo-pago-text">Tu proximo pago</h4>
              {/* <h1 className="saldo">$1,499,970.00</h1> */}
              <h1 className="saldo-a-pagar">{moneyFormatter(total)}</h1>
              
          </div>
      )
  }
  export default ProximoPago;