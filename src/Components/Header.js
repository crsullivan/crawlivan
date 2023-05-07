import React from 'react';
import './Header.css';
import '../Assets/Banner.png'

function Header() {
    return (
        <div className="header">
            <img src={require("../Assets/Banner.png")} alt='Banner with the names of the bride and groom.'></img>
            <div className="navs">
                <div className="navitem">
                    <a href="https://crawlivan.wedding/" style={{color: window.location.href==='https://crawlivan.wedding/' ? 'turquoise' : 'return'}} className="navlink">Home</a>
                </div>
                <div className="navitem">
                    <a href="https://crawlivan.wedding/wedding-party" style={{color: window.location.href==='https://crawlivan.wedding/wedding-party' ? 'turquoise' : 'return'}} className="navlink">Wedding Party</a>
                </div>
                <div className="navitem">
                    <a href="https://crawlivan.wedding/venue" style={{color: window.location.href==='https://crawlivan.wedding/venue' ? 'turquoise' : 'return'}} className="navlink">Venue</a>
                </div>
                <div className="navitem">
                    <a href="https://crawlivan.wedding/gallery" style={{color: window.location.href==='https://crawlivan.wedding/gallery' ? 'turquoise' : 'return' }} className="navlink">Gallery</a>
                </div>
                <div className="navitem">
                    <a href="https://crawlivan.wedding/faq" style={{color: window.location.href==='https://crawlivan.wedding/faq' ? 'turquoise' : 'return' }} className="navlink">FAQ</a>
                </div>
                <div className="navitem">
                    <a href="https://crawlivan.wedding/rsvp" style={{color: window.location.href==='https://crawlivan.wedding/rsvp' ? 'turquoise' : 'return' }} className="navlink">RSVP</a>
                </div>
            </div>
        </div>
    )
  }
  
  export default Header;