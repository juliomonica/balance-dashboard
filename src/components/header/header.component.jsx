import React from "react";
import PerfilUsuario from "../../assets/perfil.png";
import "./header.styles.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header">Hola José</h1>
      <img
        className="perfil-usuario"
        src={PerfilUsuario}
        alt="Perfil de Usuario"
      />
    </div>
  );
};

export default Header;
