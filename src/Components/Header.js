import React from 'react';
import './Header.css';
import '../Assets/Banner.png'

function Header() {
    return (
        <div class="header">
            <img src={require("../Assets/Banner.png")} alt='Banner with the names of the brdie and groom.'></img>
            <div class="navs">
                <div class="navitem">
                    <a href="https://crawlivan.wedding/" class="navlink">Home</a>
                </div>
                <div class="navitem">
                    <a href="https://crawlivan.wedding/bridal-party" class="navlink">Bridal Party</a>
                </div>
                <div class="navitem">
                    <a href="https://crawlivan.wedding/venue" class="navlink">Venue</a>
                </div>
                <div class="navitem">
                    <a href="https://crawlivan.wedding/gallery" class="navlink">Gallery</a>
                </div>
            </div>
        </div>
    )
  }
  
  export default Header;