import React from 'react'
import Container from 'react-bootstrap/Container';
import One from '../IMG/m7.jfif';


const Testemonel = () => {
  return (
    <div className='testemonel'>
    <Container>
    <div className='row'>
    <div className='col-md-6 colleftest'>
    <h1>TESTEMONEL</h1>
    <div className='row'>
    <div  className='col-1   line'><h1>__</h1> </div>
    <div  className='col-10'>
    <p><span> The href attribute is required for an </span> anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If 
    you cannot provide an href, but still need the element to<span> resemble a link,</span> use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md</p>
    <h2>josfen sarfe</h2> 
    <b><span>___</span>CEO ,Omisoft</b>
     
     </div>
     </div>
    
    </div>
    <div className='col-md-6'>
    <div className='boxtextemonel'>
    <img class="object-cover object-center rounded" alt="hero" src={One} />

    </div>
    </div>
    </div>
    </Container>
    </div>
  )
}

export default Testemonel