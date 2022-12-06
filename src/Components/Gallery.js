import React from 'react';
import './Gallery.css';

function Gallery() {
    return (
        <div className="gallery-container">
            <img src={require("../Assets/_DSC8777.jpg")} alt='Banner with the names of the brdie and groom.'></img>
            <img src={require("../Assets/_DSC8795.jpg")} alt='Banner with the names of the brdie and groom.'></img>
            <img src={require("../Assets/_DSC9500.jpg")} alt='Banner with the names of the brdie and groom.'></img>
            <img className="wide-image" src={require("../Assets/_DSC8882.jpg")} alt='Banner with the names of the brdie and groom.'></img>
            <img src={require("../Assets/_DSC9521.jpg")} alt='Banner with the names of the brdie and groom.'></img>
            <img src={require("../Assets/_DSC9835.jpg")} alt='Banner with the names of the brdie and groom.'></img>
            <img src={require("../Assets/_DSC8893.jpg")} alt='Banner with the names of the brdie and groom.'></img>
            <img className="wide-image" src={require("../Assets/_DSC8915.jpg")} alt='Banner with the names of the brdie and groom.'></img>
          
            {/* <img src={require("../Assets/_DSC9905.jpg")} alt='Banner with the names of the brdie and groom.'></img> */}
        </div>
    )
  }
  
  export default Gallery;