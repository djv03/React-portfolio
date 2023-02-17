import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <ul>
          <li className='nav-links'><Link  to="/"> Home</Link></li>
          <li className='nav-links'><Link  to="/about"> About</Link></li>
          <li className='nav-links'><Link   to="/projects"> Project</Link></li>
          <li className='nav-links'><Link   to="/contact"> Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
