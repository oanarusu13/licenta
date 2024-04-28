import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../image.png';

function Navbar({ isAdmin }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Acasă</Link></li>
        <li><Link to="/update">Setări Cont</Link></li>
        {isAdmin && <li><Link to="/statistici">Statistici</Link></li>}
        <li><Link to="/deconectare">Deconectare</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
