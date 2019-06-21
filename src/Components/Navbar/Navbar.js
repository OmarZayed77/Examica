import React from 'react';
import UpperNavbar from './upperNavbar';
import LowerNavbar from './lowerNavbar';
import MiddleNavbar from './MiddleNavbar';
import './Navbar.css';


const Navbar = () => {
  // Event Handler to route to the selected navbar item 'to' prop when a navbar item selected
  let token = localStorage.getItem("token");
  let nav = null;
  if (token) {
    nav = (
      <div>
      <MiddleNavbar/>
      </div>
    )
  }else {
    nav = (<div><UpperNavbar/><LowerNavbar/></div>)
  }
  return (
    nav
  );
};


export default Navbar;
