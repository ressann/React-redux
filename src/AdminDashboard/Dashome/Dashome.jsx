import './dashome.css'
import React from 'react'
import ProductData from '../ProductData/ProductData'
import Graphic from '../Graphic/Graphic'

const Dashome = () => {
  return (
    <div className='dashome'>
       <ProductData/>
       <Graphic/>
    </div>
  )
}

export default Dashome