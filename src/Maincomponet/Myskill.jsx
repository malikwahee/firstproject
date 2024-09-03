import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Py from '../IMG/python.png'
import Jv from '../IMG/java.png'
import Goo from '../IMG/goole.svg'
import Reac from '../IMG/react1.png'
import Cs from "../IMG/css.png"
import Gi from "../IMG/git1.png"
import Mo from "../IMG/mongo.jfif"

const Myskill = () => {
  return (
    <div id='targetSection3'>
    <Container>
    <h1 className='toptext'>MY SKILL</h1>
    <div className='row myskill'>
    <div className='col-md-3'>
    <div className='box'>
     <img src={Jv} alt='react' />
       <p className='mt-2'>Java Script </p>
    </div>
    </div>

    <div className='col-md-3'>
    <div className='box'>
     <img src={Cs} alt='react' className='' />
       <p className='mt-2'>CSS styles </p>
    </div>
    </div>

    <div className='col-md-3'>
    <div className='box'>
     <img src={Reac} alt='react' />

       <p className='mt-2'>React js</p>
    </div>
    </div>

    <div className='col-md-3'>
    <div className='box'>
     <img src={Jv} alt='react' />
       <p className='mt-2'>Java React</p>
    </div>
    </div>
    
    <div className='col-md-3'>
    <div className='box'>
     <img src={Gi} alt='react' className='' />
       <p className='mt-2'>   Git Hub</p>
    </div>
    </div>
    <div className='col-md-3'>
    <div className='box'>
     <img src={Goo} alt='react' className='' />
       <p className='mt-2'>Goole</p>
    </div>
    </div>
    <div className='col-md-3'>
    <div className='box'>
     <img src={Py} alt='react' className='' />
       <p className='mt-2'>Python</p>
    </div>
    </div>

    <div className='col-md-3'>
    <div className='box'>
     <img src={Mo} alt='react' className='' />
       <p className='mt-2'>Mongo Db</p>
    </div>
    </div>
    

    </div>          
    </Container>



    <Container>
    <div className='row myskill '>
    <div className='col-md-3 setmargsecond'>
    <div className='box'>
     <img src={Jv} alt='react' />
       <p className='mt-2'>React js</p>
    </div>
    </div>

    <div className='col-md-3'>
    <div className='box'>
     <img src={Goo} alt='react' className='' />
       <p className='mt-2'>React js</p>
    </div>
    </div>

    <div className='col-md-3'>
    <div className='box'>
     <img src={Py} alt='react' />

       <p className='mt-2'>React js</p>
    </div>
    </div>
    

    </div>          
    </Container>


    <Container>
    <div className='row myskill '>
    <div className='col-md-3 setmargthred'>
    <div className='box'>
     <img src={Jv} alt='react' />
       <p className='mt-2'>React js</p>
    </div>
    </div>

    <div className='col-md-3'>
    <div className='box'>
     <img src={Reac} alt='react' className='' />
       <p className='mt-2'>React js</p>
    </div>
    </div>

    
    

    </div>          
    </Container>
    
    
    </div>
  )
}

export default Myskill