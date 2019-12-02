import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <NavLink to={"/"} className="NavLink">
        <FontAwesomeIcon
          icon="home"
        />
      </NavLink>
      <NavLink to={"/form"} className="NavLink">
        Form
      </NavLink>
    </div>
  )
}

export default Navbar;