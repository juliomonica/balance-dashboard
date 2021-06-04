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
        <h4 className="text-transaction">
        {transaction.text}{" "}
        </h4> 
        <span>
          {moneyFormatter(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
    </div>
  );
};
export default Transaction;
