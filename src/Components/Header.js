import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="navitem">
                <a href="/" className="navlink">Home</a>
            </div>
            <div className="navitem">
                <a href="/bridal-party" className="navlink">Bridal Party</a>
            </div>
            <div className="navitem">
                <a href="/venue" className="navlink">Venue</a>
            </div>
            <div className="navitem">
                <a href="/faq" className="navlink">FAQ</a>
            </div>
        </div>
    )
  }
  
  export default Header;