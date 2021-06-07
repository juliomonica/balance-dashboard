import React, { useContext } from "react";
import { GlobalContext } from "../../context/global-state";
import "./movimiento.styles.css";
//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="transactions">      
      <img id="myImage" alt='' src={transaction.image}/>

      <div className="text-container">
      <div className="text-transaction">{transaction.text} <div className='subtext'>{transaction.subtext}</div></div>
      </div>
      <div className="money-container">
      <div className="text-date">{transaction.date} <div className="text-money">{moneyFormatter(transaction.amount)}</div></div>
      </div>
      {/* <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button> */}
    </div>
  );
};
export default Transaction;
