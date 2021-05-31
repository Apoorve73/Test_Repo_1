import React from 'react';
import './sidebar.css'


const SideBar = () => {
    return(
        <>
        <div className='sidebar'>
            <div className='keyStats'>
                <img src="https://img.icons8.com/windows/32/000000/settings.png" className='icon'/>
                <br />
                Key Stats
            </div>

            <div className='visits'>
                <img src="https://img.icons8.com/ios/32/000000/horizontal-settings-mixer--v1.png" className='icon'/>
                <br />
                Visits
            </div>

            <div className='customerType'>
                <img src="https://img.icons8.com/windows/32/000000/visible.png" className='icon' />
                <br />
                Customer Type
            </div>

            <div className='customerJourney'>
                <img src="https://img.icons8.com/windows/32/000000/journey.png" className='icon' />
                <br />
                Customer Journey
            </div>

            <div className='placeOfInterest'>
                <img src="https://img.icons8.com/windows/32/000000/place-marker.png" className='icon' />
                <br />
                Place of Interest
            </div>
        </div>
        </>
    )
}

export default SideBar