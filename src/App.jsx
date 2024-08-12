import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Registration from './Registration'
import Home from './Home';


function App() {
 

  const [data,setData]=useState([]);

 const addtoarray=(formData)=>{
  setData(prev=>{
    return [
      ...prev,
      formData
    ]
  })
 }

  return (
   
    <Router>
      <Routes>
        <Route path='/' element={<Registration  add={addtoarray}/> } />
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
    
    
    
    
    
  )

   
}

export default App
