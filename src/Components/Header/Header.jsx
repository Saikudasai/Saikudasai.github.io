import '../Header/Header.scss';
import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
      <div className="Header">
        <div className='right'>
            <div className='logo'></div>
            <Link to="/"><div className='text'></div></Link>
        </div>
        <div className='left'>
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/services">Послуги</Link></li>
            <li><Link to="/advertisement">Реклама</Link></li>
            <li><Link to="/contact">Контакти</Link></li>
        </div>
      </div>
    
  );
}

export default Header;
