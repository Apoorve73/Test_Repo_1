import React from 'react';
import Arrow from './images/arrow.png'
import Download from './images/download.png'
import Share from './images/share.png'
import './loyalty.css'

const Loyalty = () => {
    return(
        <div className='loyalty'>
            <div className='first-line'>
                <div className='left'>
                    <p className='heading'>Loyalty</p>
                </div>
                
                <div className='right'>
                    <p className='date'>21st April - 29th April</p><img className='icon' src="https://img.icons8.com/material/32/000000/sort-down--v1.png"/>
                    <img src="https://img.icons8.com/windows/32/000000/share-2.png" className='icon'/>
                    <img className='icon' src="https://img.icons8.com/windows/32/000000/download.png"/> 
                </div>                              
            </div>
            

            <div className='cards'>
                <div className='loyal'>
                    <h3>XXX</h3>
                    <p>Loyal Customer %</p>
                </div>
                <div className='new'>
                    <h3>XXX</h3>
                    <p>New Customer %</p>
                </div>
                <div className='lost'>
                    <h3>XXX</h3>
                    <p>Lost Customer %</p>
                </div>                
            </div>
        </div>
    )
}

export default Loyalty