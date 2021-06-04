import React from "react";
import Balance from "../../components/balance/balance.component";
import Barra from "../../components/barra/barra.component";
import DisposicionPreview from "../../components/disposicion-preview/disposicion-preview.component";
import Grafica from "../../components/grafica/grafica.component";
import Header from "../../components/header/header.component";

import "./disposicion.styles.css";

const Disposicion = () => (
  <div className="disposicion-container">
    <Header />
    <Balance />
    <DisposicionPreview />
    <Grafica/>
    <div className="barra-disposicion"><Barra/></div>
  </div>
);

export default Disposicion;
