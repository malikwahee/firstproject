import React from 'react'
import { DiCelluloid } from "react-icons/di";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';


import {
  BrowserRouter as Router,
  // Routes,
  // Route,
} from "react-router-dom";


const Header = () => {

  const scrollToSection = () => {
    const section = document.getElementById('targetSection');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection2 = () => {
    const section = document.getElementById('targetSection2');
    section.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSection3 = () => {
    const section = document.getElementById('targetSection3');
    section.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToSection1 = () => {
    const section = document.getElementById('targetSection1');
    section.scrollIntoView({ behavior: 'smooth' });
  };
  
  
  
  
  return (
    
    <div className='navsestcolor'>
    <Router>
    <header class="">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <DiCelluloid className='hedericon' onClick={scrollToSection1}/>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link class="mr-5 setmenue " to='/about' onClick={scrollToSection3}>About us</Link>
      <Link class="mr-5 setmenue " to='/Portfolio' onClick={scrollToSection2} >Portfiole</Link>
      <Link class="mr-5 setmenue " to='/myskill' onClick={scrollToSection} >Contact Us</Link>
    </nav>
    <div className='setser'>
    <input type='text' placeholder='Search'/>
    <IoIosSearch className='seticonser'/>
    </div>
  </div>


</header>
</Router>
    </div>
  )
}

export default Header