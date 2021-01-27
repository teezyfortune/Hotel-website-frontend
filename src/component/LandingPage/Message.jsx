import React from 'react'
import { Link } from 'react-router-dom';
import './css/message.css'

const  Message =() => {
    return (
        <>
        <div className="message">
            <h3 className="text-msg">Send A Message</h3>
            <p className="p-text">Do you want to make enquiries or book one of our amazing services? 
            Our inbox is always open, kindly reach out to us and you will be attended to as soon as we get it.
             Thank you.</p>
             <Link className="msg-btn"><span className="btn-text">Contact Us </span></Link>
        </div>
        </>
    )
}

export default Message;