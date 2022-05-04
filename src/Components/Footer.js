import React from 'react';
import './Footer.scss';

var year = new Date().getFullYear();

function Footer() {
    return (
        <div class="footer">
            <p>© EclecticLogic {year}

            </p>
            <div class="navitem">
                <a class="navlink">Contact Us</a>
            </div>
        </div>
    )
  }
  
  export default Footer;