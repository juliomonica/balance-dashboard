import React from "react";
import {Link} from 'react-router-dom';
import  {ReactComponent as LeftArrow} from '../../assets/back-arrow.svg';
import "./header-secundario.styles.css";

const HeaderSecundario = () => {
  return (
    <div className="header-secundario-container">
        <Link to='/'><LeftArrow className= 'back-arrow-icon'/></Link>
        <Link to='/' className="header-link"><h1 className="header-cancelar">CANCELAR</h1></Link>   
    </div>
  );
};

export default HeaderSecundario;
