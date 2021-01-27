import React from 'react'
import './css/testimony.css';
import image1 from '../../assets/images/LandingPage/image1.jpg'
import image2 from '../../assets/images/LandingPage/image2.jpg'
import image3 from '../../assets/images/LandingPage/image3.jpg'
import image4 from '../../assets/images/LandingPage/image4.jpg'
import image5 from '../../assets/images/LandingPage/image5.jpg'
import image6 from '../../assets/images/LandingPage/image6.svg'
import image7 from '../../assets/images/LandingPage/image7.svg'



const Testimony = () => {
    return (
        <div>
         <h3 className="feedback-txt">What Our Customers Say</h3>
            <ul className="feedback-section">
            <li><img  src={image1} alt="img1" className="image1"/></li> 
            <li><img src={image2} alt="img2" className="image2"/></li>
            <li><img src={image3} alt="img3" className="image3"/></li><li>
            <img alt="img4" src={image4} className="image4"/></li>
            <li><img src={image5} alt="img5" className="image5"></img></li></ul>
            <img src={image6} alt="img6" className="image6"/>
            <img  src={image7} alt="img7" className="image7"/>
        </div>
    )
}

export default Testimony;