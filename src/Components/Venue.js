import React from 'react';
import './Venue.css';

function Venue() {
    return (
        <div className="main-venue-container">
            <div className="venue-info-container">
                <div className="venue-container-text">
                    <h2>We have selected Arizona Nordic Village as our destination...</h2>
                    <p>This beautiful, secluded getaway checked all of our boxes, but please be aware of the rustic nature of the experience we intend to have here.</p>
                    <p>The entire venue is almost exclusively outdoors, and there is no pathing to speak of with the exception of dirt trails - if it rains, there will be mud.</p>
                    <p>The venue is far enough outside of town to be off-grid. Electiricty is scarce, and provided by a generator. Plenty of fresh, purified water will be provided by us through the use of portable 5 gallon jugs with a manual, but easy-to use, pump.</p>
                    <p>Please come prepared for the unexpected! We will not let a little rain, snow or wind get in our way, keep this in mind when selecting your attire. Our ultimate goal is for everyone to feel comfortable and happy with us on this day. Boots are highly recommended.</p>
                </div>
                <img className="nordic-pic" src={require("../Assets/NordicVillage.jpg")} alt='Banner with the names of the bride and groom.'></img>
            </div>
            <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.529217701628!2d-111.79235508447115!3d35.36732815473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87327c3b6038e775%3A0x6e70dc1cd4c24926!2sArizona%20Nordic%20Village!5e0!3m2!1sen!2sus!4v1670279153823!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy" title="Google Maps link to Arizona Nordic Village" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="map-container-text">
                    <p>Located a little over 16 miles from downtown Flagstaff, Arizona Nordic Village has 4 cabins, and 4 yurts available to us on the night of our event. There are also a plethora of camping spots, and places to set up your RV or camper van if you have one. </p>
                    <p>For anyone who would prefer to have a solid roof over their head, sans wheels and with flowing water, we recommend booking an airbnb or vrbo in the Cheshire community near the Museum of Northern Arizona, or the Fort Valley Community near the road to Arizona Snowbowl. There is nothing wrong with staying in Flagstaff itself, of course. as long as you don't mind the 20-40 minute drive!</p>
                </div>
            </div>
        </div>
    )
  }
  
  export default Venue;