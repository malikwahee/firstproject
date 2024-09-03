import React from 'react'
import Container from 'react-bootstrap/Container';
import One from '../IMG/fm2.jpg';
// import One from '../IMG/mf1.jpeg';
// import One from '../IMG/f1.jpeg';
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";





const Home = () => {
  return (
    <div id='targetSection1' className='homepage'>
    <Container>
    <div className='row'>
    <div className='col-md-6 colleft'>
    <h1>I'M <span>React Dev</span></h1>
    <h2>React Devlpoer & React PHP <br /> Devlpoer </h2>
     <button>Click medium</button>
    </div>

    <div className='col-md-6 p-5 d-flex '>
    <div>
    <img class="colright w-100 h-100 mt-5" alt="hero" src={One} />
    </div>
    <div className='seticonhome'>
    <div className='linebox1'></div>
    <FaFacebookF className='seticonhom'/>
    <GrLinkedinOption className='seticonhom'/>
    <FaWhatsapp className='seticonhom'/>
    <FaWhatsapp className='seticonhom'/>
    </div>
    </div>
    </div>
    </Container>
    </div>
  )
}

export default Home



// <h1>I'M <span>React Dev</span></h1>
// <h2>React Devlpoer & React Devlpoer </h2>
// <button>Click medium</button>

// <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
// <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
// </div>