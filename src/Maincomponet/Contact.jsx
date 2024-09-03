import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { FaFacebook, FaFacebookMessenger,  FaTwitter, FaWhatsappSquare } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";



const Contact = () => {
  return (
    <div id="targetSection">
    <div className='contactpage'>
    <h1><span>  _______________________</span>    CONTACT US     <span> _________________________</span></h1>
    </div>
    <Container>

    <div className='contactbtnset'>
    <div className='contactdevone d-flex' >
    <div className='ssetfav'> <FaFacebookMessenger /></div> <div><h3> demo@gmail.com </h3></div>
    </div>
    <div className='contactdevone d-flex' >
    <div className='ssetfav'> <FaPhone /></div> <div><h3> 3185320925 </h3></div>
    </div>

    </div>

    <div className='contactbtnset'>
    <div className='contactdevone d-flex' >
    <div className='ssetfav'> <FaLocationDot /></div> <div><h3> Tole , United State </h3></div>
    </div>
    

    </div>

    </Container>
    <div className='contactpage2'>
    <h1> <span>  _____________________________</span> <FaFacebook /> <FaTwitter /> <FaFacebookMessenger />  <FaWhatsappSquare /><span> _____________________________</span></h1>
    </div>

    <h1 className='lastscoll'>Thanks For Scrolling</h1>

    </div>
  )
}

export default Contact