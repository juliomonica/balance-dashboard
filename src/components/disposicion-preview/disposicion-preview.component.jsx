import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/global-state";
import './disposicion-preview.styles.css';

const DisposicionPreview = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: -amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <div className="container">
      <h3 className="disposicion-texto">Disposicion</h3>
      <form onSubmit={handleSubmit}>     
          <input className="nombre"
            name="name"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <input className="cantidad"
            name="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        <button className="button-lo-quiero">LO QUIERO</button>
      </form>
    </div>
  );
};

export default DisposicionPreview;
