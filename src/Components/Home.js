import React from 'react';
import './Home.css';
import '../Assets/mainLogo.png';

function Home() {

    document.addEventListener('contextmenu', event => event.preventDefault());

    return (
        <div className="home-container">
            <div className="home-container-banner">
                <h1>Please Join Us In Celebrating...</h1>
            </div>
            <div className='home-container-content'>
                <h1>...Our Story</h1>
                <p>
                    We met in fall of 2012 at Northern Arizona University, the college we were both attending. Somehow, we managed to share two classes that semester, without having the same major, or even being in the same department. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
  }
  
  export default Home;