import React from 'react';
import './Home.css';
import '../Assets/mainLogo.png';

function Home() {

    document.addEventListener('contextmenu', event => event.preventDefault());

    return (
        <div className="home-container">
            <div className="home-container-banner">
                <h1>Please Join Us in Celebrating</h1>
            </div>
        </div>
    )
  }
  
  export default Home;