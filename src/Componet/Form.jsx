import React, { useState } from 'react'

const Form = () => {

    const [data, setData] = useState({
        username: '',
        password: '',
        email: '',
    });
    
    const changinput = (e) => {
        const name = (e.target.name);
        const value = (e.target.value);
        
        setData({...data, [name]: value})

        console.log(name, value)

    }

    const [data2, setData2] = useState([])

    const submitdata = (e) => {
        e.preventDefault();
        const newdata = { ...data }
        console.log(data, newdata)
        setData2([...data2, newdata]);

        setData({username:'' , email:'' , password: ''})

    }


  return (
    <div className='fromstyle back m-5 p-5'>
    <div>
    <div>
    <label>username</label>
    <input type='text' name='username' id='username' onChange={changinput} value={data.username}/>
    </div>
    <div>
    <label>Email</label>
    <input type='email' name='email' id='emial' onChange={changinput} value={data.email}/>
    </div>
    <div>
    <label>PassWord</label>
    <input type='password' name='password' id='password' onChange={changinput} value={data.password}/>
</div>

    <button className='btn'  onClick={submitdata}>SUBMIT</button>
    </div>
    {
        data2.map((curElement) => {
            return(
                <div className='d-flex'>
                <h1>username:{curElement.username} </h1>
                <h1>PassWord:{curElement.password} </h1>
                <h1>Email: {curElement.email} </h1>
                </div>
            )
        })
    }

    </div>
  )
}

export default Form