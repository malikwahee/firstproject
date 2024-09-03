import React, { useState } from 'react'

const Testfrom = () => {

    const [data, setData] = useState({
        username: '',
        password: '',
        email: ''
    });


    const handelInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)

        setData({ ...data, [name]: value });
    }
    const [recod, setRecod] = useState([]);

    const handleSubmit = (e) => {
       e.preventDefault();
       const newRecord = { ...data, id:new Date().getTime().toString() }
       console.log(recod);
       setRecod([...recod, newRecord]);
       console.log(recod)

       setData({ username:"", password:"" });

    }

  return (
    <div className='m-5 back'>
    <form action='' onSubmit={handleSubmit}>
    <div>
    <label>User Name</label>
    <input type='text' name='username' id='username' value={data.username} onChange={handelInput} />
    </div>
    <div>
    <label>PassWord</label>
    <input type='text' name='password' id='password' value={data.password} onChange={handelInput} />
    </div>
    <div>
    <label>PassWord</label>
    <input type='text' name='email' id='email' value={data.email} onChange={handelInput} />
    </div>
    
    <input type='submit' />
    </form>

    {
        recod.map((curElem) => {
            return(
                <div>
                <h1> {curElem.username} </h1>
                <h1> {curElem.password} </h1>
                </div>
            )
        })
    }

    </div>
  )
}

export default Testfrom