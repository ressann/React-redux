import './order.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCart,carts } from '../../features/Cart/CartSlide'

const Order = ({order}) => {
    const Carts=useSelector(carts)
    const param = useParams()
    const id = param.id -1
    const [total,setTotal]=useState(0)
    const [quantity,setQuantity]=useState(0)
    const dispatch = useDispatch()

    useEffect(()=>{
        const sumTotal =()=>{
            setTotal(quantity*order[id].price)
        }
        sumTotal()

    },[quantity])
    console.log(Carts)
    const handleOrder=(e)=>{
        e.preventDefault()
        dispatch(addCart({
            title:order[id].title,
            img:order[id].img,
            price:order[id].price,
            quantity:quantity,
            total:total,
            id:Math.random(),
        }))
    }
  return (
    <div className='order'>
        <div className='order-header'>
            <h1>Get Order The Food</h1>
        </div>
        {order[id] && 
        <div className='order-list'>
            <img src={order[id].img} alt="" />
            <form>
                <h2>{order[id].title}</h2>
                <p>Price : {order[id].price}$</p>

                <div className='order-number'>
                    <label htmlFor="quantity">Quantity : </label>
                    <input type="number" name='quantity' id='quantity'
                    min={0}
                        onChange={(e)=>setQuantity(e.target.value)}
                    />
                </div>

                <p>Total Price : {total}$</p>

                <button 
                    disabled={total ===0 ? true:false}
                    onClick={(e)=>handleOrder(e)}
                >Get Order</button>
            </form>
        </div>
        }
    </div>
  )
}

export default Order