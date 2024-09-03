import React from 'react';
// import One from './IMG/b4-webp';
// import One from '../src/IMG/b4.webp'
// import  './Main1.css'
import '../Componet/Idogram.css'
import { MdAcUnit } from "react-icons/md";
import { GoX } from "react-icons/go";
import { GiConsoleController } from "react-icons/gi";
import { IoLogoApple } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";




// import {AcUnitIcon} from '@mui/icons-material/AcUnit';
// import { GiUnionJack } from "react-icons/gi";




const Idogram = () => {
  return (
    <div className='ai-image-gernertor'>
    
    <div className=''>

    <div className='mainone'>
    <div className='idogrm'>
    <span className='ml-3'><MdAcUnit /> </span>
    <p>Idogram</p>
    </div>

    <div className='idogrmright flex'>
    <span><GiConsoleController /> </span>
    <span><GoX /> </span>
    </div>
    </div>
     <div className='image'> </div>
    </div>
    <button className='btn btnset'><span><FcGoogle  />  </span> Contniue With Goole</button>

    <button className='btn btnset'><span><IoLogoApple /> </span>  Contniue with Apple</button>

    

    </div>
  )
}

export default Idogram