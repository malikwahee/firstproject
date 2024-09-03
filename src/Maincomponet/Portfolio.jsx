import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Port from '../IMG/b7c.jpeg'
import Port2 from '../IMG/five.png'
import F1 from '../IMG/f2.jpeg'
import F2 from '../IMG/f1.jpeg'
import F4 from '../IMG/f4.jpeg'
import F5 from '../IMG/f5.jpeg'

const Portfolio = () => {
  return (
    <div id='targetSection2' className='portfolio'>
    <h1>PORTFOLIO</h1>
    <Container>
    <div className='row mt-4'>

    <div className="col-md-4 image-container">
    <img src={F2} alt='asd' className="hover-image" />
    <div className="text-overlay texthover"> 
    <h2>Amazon Scribe</h2>
    <p>A Simmpel bloge user thisse A Simmpel bloge user thisseA Simmpel bloge user thisse</p>
    <button1 className=''>Click Me </button1>
    </div>
  </div>


  <div className="col-md-4 image-container">
    <img src={F1} alt='asd' className="hover-image" />
    <div className="text-overlay texthover"> 
    <h2>Amazon Scribe</h2>
    <p>A Simmpel bloge user thisse A Simmpel bloge user thisseA Simmpel bloge user thisse</p>
    <button1 className=''>Click Me </button1>
    </div>
  </div>

  <div className="col-md-4 image-container">
    <img src={F4} alt='asd' className="hover-image" />
    <div className="text-overlay texthover"> 
    <h2>Amazon Scribe</h2>
    <p>A Simmpel bloge user thisse A Simmpel bloge user thisseA Simmpel bloge user thisse</p>
    <button1 className=''>Click Me </button1>
    </div>
  </div>


    

    
    
    </div>


    <div className='row mt-4'>

    <div className="col-md-4 image-container">
    <img src={F5} alt='asd' className="hover-image" />
    <div className="text-overlay texthover"> 
    <h2>Amazon Scribe</h2>
    <p>A Simmpel bloge user thisse A Simmpel bloge user thisseA Simmpel bloge user thisse</p>
    <button1 className=''>Click Me </button1>
    </div>
  </div>


  <div className="col-md-4 image-container">
    <img src={Port2} alt='asd' className="hover-image" />
    <div className="text-overlay texthover"> 
    <h2>Amazon Scribe</h2>
    <p>A Simmpel bloge user thisse A Simmpel bloge user thisseA Simmpel bloge user thisse</p>
    <button1 className=''>Click Me </button1>
    </div>
  </div>

  <div className="col-md-4 image-container">
    <img src={Port} alt='asd' className="hover-image" />
    <div className="text-overlay texthover"> 
    <h2>Amazon Scribe</h2>
    <p>A Simmpel bloge user thisse A Simmpel bloge user thisseA Simmpel bloge user thisse</p>
    <button1 className=''>Click Me </button1>
    </div>
  </div>


    
    
    </div>
    </Container>

    <button>View More</button>

    </div>
  )
}

export default Portfolio