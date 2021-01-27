import React from 'react'
import { Link } from 'react-router-dom'
import div3Image from '../../assets/images/LandingPage/div-3.svg'
import './css/Meals.css'


const Meals = () => {
  return (
    <div className="sections">
      <img src={div3Image} alt="mealImage" className='meal' />
      <div className="content">
      <h3 className="meal-text1" > DELICIOUS MEAL </h3>
      <h3 className="meal-text2"> MOUTH WATERY MEALS</h3>
     <p className="content-3"> Savor our satisfactory and  mouth-watery food prepared with love and care by our professional chefs. 
      We offer Italian, Mexican, Chinese cuisines and also our Nigerian traditional meals that
       do makes you feel completely at home. We promise you home away from home experience in our hotel.</p>
      <Link className="meal-btn"> Book Now</Link>
       </div>
    </div>
  );
};

export  default Meals