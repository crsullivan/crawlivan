import React from 'react';
import './Footer.css';


var year = new Date().getFullYear();

function Footer() {
    return (
        <div class="footer">
            <p>© EclecticLogic {year}

            </p>
            <div class="navitem">
                <a href="http://localhost:3000/contact"  class="navlink">Contact Us</a>
            </div>
        </div>
    )
  }
  
  export default Footer;