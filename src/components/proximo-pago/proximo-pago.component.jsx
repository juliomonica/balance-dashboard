import React from 'react';

import './proximo-pago.styles.css';

import logro from '../../assets/logro.png';
import TDC from '../../assets/TDC.png';


const arrayLogros = [
  {id: 1, image: logro, text: 'Mis logros', amount: 27260},
  {id: 2, image: TDC, text: 'Compras con TDC', amount: 1600}
];
const logros = arrayLogros.map((arrayLogros) =>
  <div key={arrayLogros.id} className="array-container">
  <img id="imagen-logros" alt='' src={arrayLogros.image}/> 
  <div className="text-logros">{arrayLogros.text}</div> 
  <div className="text-amount">{moneyFormatter(arrayLogros.amount)}</div> 
  </div>
  );
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
              
              <div className="fecha-pago-container">
                <div className="fecha-pago-text">Fecha de pago <div className="fecha-text">16 Enero</div></div>
                <button className="btn-pagar-ahora">PAGAR AHORA</button>
              </div>

              <div className="logros-container">
                {logros}
              </div>              
          </div>
      )
  }
  export default ProximoPago;