import React, { useState } from 'react'
import { MdAcUnit } from 'react-icons/md'
import '../Componet/Serch.css'

const Serch = () => {
  const [data, setData] = useState({
    username: '',
  });
  const [data1, setData1] = useState([])

const handel = (e) => {

  const name = e.target.name;
  const value = e.target.value
  console.log(name, value)

  setData({ ...data, [name]: value})
  // console.log(e.taget.value)

}

const handelclick = (e) => {
  console.log('cik')
  e.preventDefault();
  const newRecord = { ...data }
  console.log(data);
  setData1([...data1, newRecord]);
  // console.log(data1)

  setData({ username:"", password:"" });

}


  return (
    <div className='mainserch'>
    <div className='idogrm'>
    <span><MdAcUnit /> </span>
    <p>Idogram</p>
    </div>
    <div className='mainser'>
    <input type='text' name='username' id='username' placeholder='we want to creat ' onChange={handel} />

    <button className='' onClick={handelclick}>Generate</button>

    </div>
    {
      data1.map((curElem) => {
          return(
              <div>
              <h1> {curElem.username} </h1>
              </div>
          )
      })
  }
    
    </div>
  )
}

export default Serch


// import React, { useState } from 'react'
// import { MdAcUnit } from 'react-icons/md'
// import '../Componet/Serch.css'

// const Serch = () => {
//   const [data, setData] = useState()
//   const [data1, setData1] = useState(false)

// const Chang = (e) => {
//   console.log(e.target.value);
//     setData(e.target.value)
// }


//   return (
//     <div className='mainserch'>
//     <div className='idogrm'>
//     <span><MdAcUnit /> </span>
//     <p>Idogram</p>
//     </div>
//     <div className='mainser'>
//     <input
//     onChange={Chang}
//     type='text' placeholder='what do you want to creat' />
//     <button className='' onClick={() => setData1(true)}>Generate</button>
//     {data1 ? <h1>{data}</h1> : ''}

//     </div>
    
//     </div>
//   )
// }

// export default Serch