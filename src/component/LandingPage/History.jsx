import React from 'react'
import { Link } from 'react-router-dom'
import div1Image from '../../assets/images/LandingPage/div-1.svg'
import './css/history.css'

const  History =() => {
    return (
        <div className="sections">
        <img src={div1Image} className="firstImage" alt="delight"/>
        <div className="content">
        <h3 className="text-delight"> DELIGHT HOTELS </h3>
        <h3 className='text-history'> OUR HISTORY</h3>
        <p className="content">Travelers throughout the world have always sought hospitable 
        places to rest and eat. Although modern hotels feature conveniences such as 
        televisions, en-suite showers and minibars, they fulfill the same purpose as 
        ancient inns and boarding houses. The history of hotel and restaurant management goes back
         many years but has always involved the essential concept of hospitality. 
        It all started in 1919, when Oluwaleke Adebayo bought his first hotel. 
        Since then, we’ve led the industry with... </p>
        <Link className="btn-1" to="#">Read more</Link>
        </div>
        </div>
    )
}

export  default History