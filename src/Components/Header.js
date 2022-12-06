import React from 'react';
import './Header.css';
import '../Assets/Banner.png'

function Header() {
    return (
        <div class="header">
            <img src={require("../Assets/Banner.png")} alt='Banner with the names of the bride and groom.'></img>
            <div class="navs">
                <div class="navitem">
                    <a href="https://crawlivan.wedding/" style={{color: window.location.href==='https://crawlivan.wedding/' ? 'turquoise' : 'return'}} class="navlink">Home</a>
                </div>
                <div class="navitem">
                    <a href="https://crawlivan.wedding/bridal-party" style={{color: window.location.href==='https://crawlivan.wedding/bridal-party' ? 'turquoise' : 'return'}} class="navlink">Bridal Party</a>
                </div>
                <div class="navitem">
                    <a href="https://crawlivan.wedding/venue" style={{color: window.location.href==='https://crawlivan.wedding/venue' ? 'turquoise' : 'return'}} class="navlink">Venue</a>
                </div>
                <div class="navitem">
                    <a href="https://crawlivan.wedding/gallery" style={{color: window.location.href==='https://crawlivan.wedding/gallery' ? 'turquoise' : 'return' }} class="navlink">Gallery</a>
                </div>
                <div class="navitem">
                    <a href="https://crawlivan.wedding/rsvp" style={{color: window.location.href==='https://crawlivan.wedding/rsvp' ? 'turquoise' : 'return' }} class="navlink">RSVP</a>
                </div>
            </div>
        </div>
    )
  }
  
  export default Header;