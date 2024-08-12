import React, { useState } from 'react'
import './Registration.css'
import { useNavigate } from 'react-router-dom'


export default function Registration(props) {


const navigate=useNavigate();

const [formData,setFromdata]=useState({
    firstname:'',
    lastname:'',
    email:'',
    password:''
})



const handleChange=(event)=>{

    const {name,value}=event.target;

    setFromdata(prev=>{
        return{
            ...prev,
            [name]:value
        }
    })
}

const handleSubmit=(event)=>{
    event.preventDefault();

    if(formData.firstname==''||formData.lastname==''||formData.email==''||formData.password ==''){
        alert('field is empty')
        return
    }
    else{
        console.log(formData)
        props.add(formData)
        
        navigate('/home')
    
       

    }

    setFromdata({
    firstname:'',
    lastname:'',
    email:'',
    password:''
    })
}



  return (
    
    <div className='registration-main'>

        <div className='registration-card'>

            <h1>Registration Form</h1>

            <form onSubmit={handleSubmit}>

                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Enter your firstName' name='firstname' value={formData.firstname} onChange={handleChange} />
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Enter your lastName' name='lastname' value={formData.lastname} onChange={handleChange} />
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Enter your email' name='email' value={formData.email} onChange={handleChange} />
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='Enter your Password' name='password' value={formData.password} onChange={handleChange} />

                    <button type='submit'>Submit</button>
            </form>
        </div>

    </div>
    
  )
}
