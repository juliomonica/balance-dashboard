import React from "react";
import Balance from "../../components/balance/balance.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Menu from "../../components/menu/menu.component";
import Movimientos from "../../components/movimientos/movimientos.component";
import ProximoPago from "../../components/proximo-pago/proximo-pago.component";

import './homepage.styles.css';

const HomePage = () => (
  <div className="homepage-container">
    <Header />
    <Menu/>
    <Balance />
    <ProximoPago/>
    <Movimientos />   
    <Footer/> 
  </div>
);

export default HomePage;
