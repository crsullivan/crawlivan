import React from 'react';
import './Header.css';

function Header() {
    return (
        <div class="header">
            <div class="navitem">
                <a href="http://localhost:3000/" class="navlink">Home</a>
            </div>
            <div class="navitem">
                <a href="http://localhost:3000/bridal-party" class="navlink">Bridal Party</a>
            </div>
            <div class="navitem">
                <a href="http://localhost:3000/venue" class="navlink">Venue</a>
            </div>
            <div class="navitem">
                <a href="http://localhost:3000/gallery" class="navlink">Gallery</a>
            </div>
        </div>
    )
  }
  
  export default Header;