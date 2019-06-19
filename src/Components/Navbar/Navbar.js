import React from 'react';
import UpperNavbar from './upperNavbar';
import LowerNavbar from './lowerNavbar';
import './Navbar.css';

const Navbar = () => {
  // Event Handler to route to the selected navbar item 'to' prop when a navbar item selected
  return (
    <div>
    <UpperNavbar/>
    <LowerNavbar/>
    </div>
  );
};


export default Navbar;
