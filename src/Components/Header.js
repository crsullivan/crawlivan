import React from 'react';
import './Header.css';
import '../Assets/Banner.png'

function Header() {
    return (
        <div class="header">
            <img src={require("../Assets/Banner.png")} alt='Banner with the names of the brdie and groom.'></img>
            <div class="navs">
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
        </div>
    )
  }
  
  export default Header;