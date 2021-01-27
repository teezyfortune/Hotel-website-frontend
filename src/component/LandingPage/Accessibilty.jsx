import React from 'react'
import { Link } from 'react-router-dom'
import div4Image from '../../assets/images/LandingPage/div-4.svg'
import './css/Accessibility.css'

const  Accessibilty =() => {
    return (
        <div className="sections">
        <div className="content-4">
        <h3 className="text-access"> ACCESSIBILITY </h3>
        <h3 className="text-facility"> Facilities And Services</h3>
        <p>We have one of the best facilities in Lagos State for your comfortability and enjoyment. 
        Facilities ranging from a well equipped gym, a steam room, spa, unisex hair and nair salon amongst others. 
        These facilities also have professionals waiting to attend to you.</p>
        <Link className="access-btn">Read more</Link>
        </div>
        <img src={div4Image} alt="accessImage" className="div4Image"/>
        </div>
    )
}

export  default Accessibilty