import React from "react";
import Balance from "../../components/balance/balance.component";
import Barra from "../../components/barra/barra.component";
import DisposicionPreview from "../../components/disposicion-preview/disposicion-preview.component";
import Grafica from "../../components/grafica/grafica.component";
import HeaderSecundario from "../../components/header-secundario/header-secundario.component";

import "./disposicion.styles.css";

const textBalance = 'Tienes disponible';

const Disposicion = () => (
  <div className="disposicion-container">
    <HeaderSecundario/>
    <div className="disposicion-texto">Disposición</div>
    <div className="balance-disposicion-container"><Balance balanceTexto={textBalance}/></div>      
    <DisposicionPreview />
    {/* <Grafica/> */}
    <div className="barra-disposicion"><Barra/></div>
  </div>
);

export default Disposicion;
