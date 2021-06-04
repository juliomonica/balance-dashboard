import React from 'react';
import  {ReactComponent as StarIcon} from '../../assets/star.svg';
import  {ReactComponent as PagarIcon} from '../../assets/pagar.svg';
import  {ReactComponent as NotiIcon} from '../../assets/bell.svg';

import './menu.styles.css';

export const Menu = () => {
    return (
        <div className="menu-container">
            <div className="logro-container"><StarIcon className= 'crear-logro'/><div className="logro-text">Crear logro</div></div> 
            <div className="pagar-container"><PagarIcon className="pagar-servicio"/> <div className="pagar-text">Pagar servicio</div></div> 
            <div className="subscripcion-container"><NotiIcon className= 'subscripcion'/> <div className="subscripcion-text">Subscripcion</div></div>               
        </div>
    )
}

export default Menu;