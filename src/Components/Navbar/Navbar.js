import React from "react";
import UpperNavbar from "./upperNavbar";
import LowerNavbar from "./lowerNavbar";
import "./Navbar.css";
// import MiddleNavbar from "./MiddleNavbar/MiddleNavbar";

const Navbar = () => {
  // Event Handler to route to the selected navbar item 'to' prop when a navbar item selected
  return (
    <div>
      <UpperNavbar />
      {/* <MiddleNavbar /> */}
      <LowerNavbar />
    </div>
  );
};

export default Navbar;
