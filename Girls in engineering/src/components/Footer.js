import React from "react";

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="footer-content">
        <p> {new Date().getFullYear()} SheTech Engineering School for Girls. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a> |
          <a href="/contact"> Contact</a> |
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> instagram</a> 
        </div>
      </div>
     </footer>
 );
};

export default Footer;