import './listproducts.css'
import React from 'react'
import { Link } from 'react-router-dom'

const ListProducts = () => {
  return (
    <div className='listproducts'>
        <ul>
            <Link to={'/'} className='li'>Khmer Food</Link>
            <Link to={'/'} className='li'>Italy Food</Link>
            <Link to={'/'} className='li'>Breackfirst</Link>
            <Link to={'/'} className='li'>Snacks</Link>
            <Link to={'/'} className='li'>Drinks</Link>
            <Link to={'/'} className='li'>Khmer Food</Link>
            <Link to={'/'} className='li'>Italy Food</Link>
            <Link to={'/'} className='li'>Breackfirst</Link>
            <Link to={'/'} className='li'>Snacks</Link>
            <Link to={'/'} className='li'>Drinks</Link>
        </ul>
    </div>
  )
}

export default ListProducts