import './productdata.css'
import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'

const ProductData = () => {
  return (
    <div className='pro-data'>
        <div className='data'>
            <h2>Total Sales Cash</h2>
            <div className='list-data'>
                <span>$5000.00</span>
                <AiFillCaretDown className='data-icon'/>
            </div>
            <p>This month</p>
        </div>
        <div className='data'>
            <h2>Total Sales Volume</h2>
            <div className='list-data'>
                <span>$5000.00</span>
                <AiFillCaretDown className='data-icon'/>
            </div>
            <p>This month</p>
        </div>
        <div className='data'>
            <h2>Profit</h2>
            <div className='list-data'>
                <span>$5000.00</span>
                <AiFillCaretDown className='data-icon'/>
            </div>
            <p>This month</p>
        </div>
    </div>
  )
}

export default ProductData