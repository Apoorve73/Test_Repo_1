import React, {useState} from 'react';
import './navbar.css'

const Nav = () => {
    return(
        <div className='navbar'>
            <div className='left-side'>
                <p className='company-name'>
                    <img src="https://img.icons8.com/windows/50/000000/star--v1.png" className='logo'/>XYZ Corp
                </p>
            </div>
            

            <div className='right-side'>
                <div className='links'>
                    <a href='#' className='foot-insights active' >Foot-Insights</a> &nbsp;
                    <a href='#' className='hyperlocal-intelligence'>Hyperlocal Intelligence</a> &nbsp;
                    <a href='#' className='sales-marketing'>Sales &amp; Marketing</a>
                </div>

                <div className='profile-pic'>
                    <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png" className='profilePic' />
                </div>
            </div>            
        </div>
    )
    
}

export default Nav