import './adminrightside.css'
import React from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Addproduct from '../AddProduct/Addproduct'
import Dashome from '../Dashome/Dashome'
import Users from '../Users/Users'
import Updateproduct from '../UpdateProduct/Updateproduct'

const Adminrightside = () => {
  return (
    <div className='adminrightside'>
      <Routes>
        <Route path='/' element={<Dashome/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/update/:id' element={<Updateproduct/>}/>
      </Routes>
    </div>
  )
}

export default Adminrightside