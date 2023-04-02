import React from 'react';
import './BridalParty.css';

function BridalParty() {
    return (
        <div className="bp-container">
            <h2>The Bride's Party</h2>
            <div className='bp-content-boxes'>
                <h3 className='bp-questions'>Senbi Wilson</h3>
                <div className='bp-answers'>
                    <p className='answer'>Officiant</p>
                </div>
            </div>
            <div className='bp-content-boxes'>
                <h3 className='bp-questions'>Darcy van Mouwerik</h3>
                <div className='bp-answers'>
                    <p className='answer'>Bride makeup</p>
                    <p className='answer'>Craftologist</p>
                </div>
            </div>
            <div className='bp-content-boxes'>
                <h3 className='bp-questions'>Jessica (Taylor) Powers</h3>
                <div className='bp-answers'>
                    <p className='answer'>Treasurer</p>
                    <p className='answer'>Craftologist</p>
                    <p className='answer'>Donut Smuggler</p>
                </div>
            </div>
            <h2>The Groom's Party</h2>
            <div className='bp-content-boxes'>
                <h3 className='bp-questions'>Colton Hooper</h3>
                <div className='bp-answers'>
                    <p className='answer'>Honorable Flower Man</p>
                    <p className='answer'>Muley</p>
                </div>
            </div>
            <div className='bp-content-boxes'>
                <h3 className='bp-questions'>Jake 'From State Farm' Newton</h3>
                <div className='bp-answers'>
                    <p className='answer'>Iceman Cometh</p>
                    <p className='answer'>Muley</p>
                </div>
            </div>
            <div className='bp-content-boxes'>
                <h3 className='bp-questions'>Thomas Sullivan</h3>
                <div className='bp-answers'>
                    <p className='answer'>Aquaman</p>
                    <p className='answer'>Trash Panda</p>
                    <p className='answer'>S'moresasaurus Rex</p>
                </div>
            </div>
        </div>
    )
  }
  
  export default BridalParty;