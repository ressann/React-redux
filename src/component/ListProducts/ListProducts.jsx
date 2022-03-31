import './listproducts.css'
import React from 'react'
import { Link } from 'react-router-dom'

const ListProducts = () => {
  return (
    <div className='listproducts'>
        <ul>
            <Link to={'/?type=khmer food'} className='li'>Khmer Food</Link>
            <Link to={'/?type=italy_food'} className='li'>Italy Food</Link>
            <Link to={'/?type=thai food'} className='li'>Thai Food</Link>
            <Link to={'/?type=india'} className='li'>Indian Food</Link>
        </ul>
    </div>
  )
}

export default ListProducts