import React from 'react'
import History from './History';
import Comfortability from './Comfortability';
import Meals from './Meals';
import Accessibilty from './Accessibilty';
import './css/MainContainer.css';





const  MainContainer =() => {
    return (
        // <>
        <div className="main-container">
        <div className="container">
        <History/>
        <Comfortability/>
        <Meals/>
        <Accessibilty/>
        </div>
        </div>
        // </>
    )
}

export  default MainContainer