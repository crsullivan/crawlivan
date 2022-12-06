import React from 'react';
import './Footer.css';


var year = new Date().getFullYear();

function Footer() {
    return (
        <div className="footer">
            <div className='footer-container'>
                <p>EclecticLogic {year}</p>
            </div>    
        </div>
    )
  }
  
  export default Footer;