import React from 'react';
import Arrow from './images/arrow.png';
import Download from './images/download.png';
import Share from './images/share.png';
import './foottraffic.css';

const FootTraffic = () => {
    return(
        <>
        <div className='foot-traffic'>
            <div className='first-line'>
                <div className='left'>
                    <p className='heading'>Foot Traffic</p>
                </div>
                
                <div className='right'>
                    <p className='date'>21st April - 29th April</p><img className='icon' src="https://img.icons8.com/material/32/000000/sort-down--v1.png"/>
                    <img src="https://img.icons8.com/windows/32/000000/share-2.png" className='icon'/>
                    <img className='icon' src="https://img.icons8.com/windows/32/000000/download.png"/> 
                </div>                               
            </div>
            

            <div className='foot-traffic-cards'>
                <div className='visits'>
                    <h3>XXX</h3>
                    <p>Number of Visits</p>
                </div>

                <div className='dwell-time'>
                    <h3>XXX</h3>
                    <p>Average Dwell Time</p>
                </div>

                <div className='avg-visit-customer'>
                    <h3>XXX</h3>
                    <p>Avg Visit/Customer</p>
                </div>

                <div className='length-stay'>
                    <h3>XXX</h3>
                    <p>Average Length of Stay</p>
                </div>
            </div>
        </div>

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


            <div className='loyalty-cards'>
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
        </>
    )
}

export default FootTraffic