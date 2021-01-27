import React from 'react'
import '../../pages/LandingPage/landing.css'
import NavBar from '../../component/LandingPage/NavBar';
import MainContainer from '../../component/LandingPage/MainContainer';
import Testimony from '../../component/LandingPage/Testimony';
import Message from '../../component/LandingPage/Message';
import Footer from '../../component/LandingPage/Footer';



 const LandingPage = () => {

    return (
        <>
      <div className="landing-bg" >
        <NavBar/>
        </div>
        <MainContainer/>
        <Testimony/>
        <Message/>
        <Footer/>
        </>
    )
}

export default LandingPage