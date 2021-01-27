import React from 'react'
import { Link } from 'react-router-dom'
import div2Image from '../../assets/images/LandingPage/div-2.svg'
import './css/Comfortability.css'

const Comfortability = () => {
  return (
    <div className="sections">
    <div className="content">
    <h3 className="comfort-text"> COMFORTABILITY </h3>
    <h3 className="accom-text"> Accommodation</h3>
    <p className="content-1"> Each guest room and suite features mordern 
    craftsmanship, creating an elegant and romantic aura through hand-painted headboards, 
    handcrafted furnishings and original artwork. Our hotel offers decadent amenities, 
    providing each guest room with high speed Wi-Fi, bottled water, luscious bath amenities, nightly turndown service, 
    plush bathrobes and more at no extra charge.</p>
    <Link className="btn-2" to="#">Check Room Rates</Link>
     </div>
      <img src={div2Image} alt="comfortImage" className="div2-image" />
    </div>
  );
};

export  default Comfortability