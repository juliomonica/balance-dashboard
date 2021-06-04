import React from 'react';
import {Link} from 'react-router-dom';

import  {ReactComponent as HomeIcon} from '../../assets/home.svg';
import  {ReactComponent as MoneyIcon} from '../../assets/money.svg';
import  {ReactComponent as CardIcon} from '../../assets/card.svg';
import  {ReactComponent as StarIcon} from '../../assets/star.svg';
import  {ReactComponent as NotiIcon} from '../../assets/bell.svg';
import Barra from '../barra/barra.component';
import './footer.styles.css';

const Footer = () => {
    return (
        <>        
        <div className="footer-container">
            <HomeIcon className='home-icon'/>
            <MoneyIcon className= 'money-icon'/>
            <Link to='/disposicion'><CardIcon className= 'card-icon'/></Link>            
            <StarIcon className= 'star-icon'/>
            <NotiIcon className= 'bell-icon'/>
        </div>        
        <Barra/>        
        </>
    )
}
export default Footer;