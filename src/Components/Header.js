import React from 'react';
import './Header.css';

function Header() {
    return (
        <div class="header">
            <div class="navitem">
                <a class="navlink">Home</a>
            </div>
            <div class="navitem">
                <a class="navlink">Bridal Party</a>
            </div>
            <div class="navitem">
                <a class="navlink">Venue</a>
            </div>
            <div class="navitem">
                <a class="navlink">Gallery</a>
            </div>
        </div>
    )
  }
  
  export default Header;