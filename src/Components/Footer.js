import React from 'react';
import './Footer.css';


var year = new Date().getFullYear();

function Footer() {
    return (
        <div class="footer">
            <div class='footer-container'>
                <p>© EclecticLogic {year}

                </p>
                <div class="footernavitem">
                    <a href="https://crawlivan.wedding/contact"  class="navlink">Contact Us</a>
                </div>
            </div>    
        </div>
    )
  }
  
  export default Footer;