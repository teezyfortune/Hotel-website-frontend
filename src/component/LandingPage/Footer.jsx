import React from 'react'
import facebook from '../../assets/images/LandingPage/facebook.svg'
import twitter from '../../assets/images/LandingPage/twitter.svg'
import './css/footer.css'

const Footer = () => {
    return (
        <>
        <div className="footer">
            <ul className="footer-top">
            <li className="room">Rooms</li>
            <li className="bar">Restaurant&Bar</li>
            <li className="fac">Facilities</li>
            <li className="offers">Offers</li>
            <li className="gallery">Gallery</li>
            <li className="contact">Contact</li>
            </ul>
            <ul className="footer-down"> 
            <li className="access">Accessibility</li>
            <li className="trust">Trust&Safety</li>
            <li  className="help">Help Center</li>
            <li><img alt="tw" src={twitter} className="twitter-img"/>
            <img alt="fb" src={facebook} className="fb-img"/> </li>
            <li className="delight">Delight Hotels Copyright 2020</li>
            </ul>
        </div>
        </>
    )
}

export default Footer