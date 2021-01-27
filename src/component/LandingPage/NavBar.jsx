import React from 'react'
import {Link} from 'react-router-dom';
import '../LandingPage/css/NavBar.css'

import Logo from '../../assets/images/LandingPage/logo.svg'

 const NavBar = () => {
    return (
        <div className="nav-bar">
        <div className="nav-logo">
        <Link href="/"><img src={Logo} alt="LOGO"/></Link></div> 
            <div className="nav-link">
            <Link href="/" className="link">Offers</Link>
           <Link href="/" className="link">Facilities</Link>
            <Link href="/" className="link">Gallery</Link>
            <Link href="/" className="link">Contact</Link>
        <Link className="nav-button"  href="/#" > Book now</Link>
            </div>
            </div>
    )
}

export default NavBar;