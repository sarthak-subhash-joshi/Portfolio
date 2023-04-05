import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
  <>
     
      <div className="footer">  
        <copyright>
          <p> Copyright &copy; {year} Made By Sarthak Joshi</p>
        </copyright>
      </div>
  
  </>
  );
} 

export default Footer;
