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
      <form className="form-container" onSubmit={handleSubmit}>     
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
          <div className="titulo-grafica">Selecciona tu plazo</div>
          <div className="grafica">            
            <div className="linea-1">Tu pago mensual</div>
            <div className="linea-2">$12,000.00</div>
            <div className="linea-3">a 60 meses</div>
            <div className="linea-4">Tasa de interés</div>
            <div className="linea-5">16.6%</div>
          </div>
        <button className="button-lo-quiero">LO QUIERO</button>
      </form>
    </div>
  );
};

export default DisposicionPreview;
