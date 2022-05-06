import React from 'react';
import './Footer.css';


var year = new Date().getFullYear();

function Footer() {
    return (
        <div className="footer">
            <p>© EclecticLogic {year}

            </p>
            <div className="navitem">
                <a href="/contact"  className="navlink">Contact Us</a>
            </div>
        </div>
    )
  }
  
  export default Footer;