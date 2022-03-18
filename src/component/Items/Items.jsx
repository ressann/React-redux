import './items.css'
import React from 'react'

const Items = ({items}) => {
  return (
    <div className='items'>
        {items && items.map(item=>{
            return (
                <>
                    <div className='item' key={item.id}>
                        <img className='image' src={item.img} alt="" />
                        <div className='info-item'>
                            <h4>{item.title}</h4>
                            <small>{item.details}</small>
                            <p>Price : {item.price}$</p>
                            <div className='btn'>
                                <button className='btn-details'>Details</button>
                                <button className='btn-order'>Order</button>
                            </div>
                        </div>
                    </div>
                </>
            )
        })}
    </div>
  )
}

export default Items