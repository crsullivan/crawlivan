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
                    We met in fall of 2012 at Northern Arizona University, the college we were both attending. Somehow, we managed to share two classes that semester, without having the same major, or even being in the same department. We quickly felt drawn toward one another, and spent much of our time in these two classes together. Shortly after, we began studying for these classes together during our free time as well, and before that semester's finals we were dating, and  committed. 
                </p>
                <p>
                    Thus began a long and serious relationship that saw us pulled away from one another due to work, injury, disease, personal commitments or endeavors, and brought back together time and time again without failure, unwaveringly committed to each other and where we were headed both individually and in tandem.
                </p>
                <p>
                    After nine years, Connor would propose to Kelsey on Lake Pleasant, while kayaking together on a planned vacation to Peoria, AZ. Only after would he realize the name of the location on the lake where he popped the question - Honeymoon Cove. He was simply waiting for what felt like the right time, and had the ring on him without fail since purchasing it at the Tucson Gem and Mineral show a few months prior. Kelsey said yes, and immediatley began putting into action what she had been planning for years. The couple would then pick a venue, and the rest is well, fairly recent history.
                </p>
            </div>
        </div>
    )
  }
  
  export default Home;