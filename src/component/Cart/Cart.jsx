import './cart.css'
import React, { useEffect, useState } from 'react'
import { carts } from '../../features/Cart/CartSlide'
import { addOrder } from '../../features/customerOrder/orderSlide'
import { useSelector,useDispatch } from 'react-redux'
import { resetCart } from '../../features/Cart/CartSlide'
import {useNavigate} from 'react-router-dom'
//import emailjs from '@emailjs/browser';

const Cart = () => {
  const Carts = useSelector(carts)
  const dispatch = useDispatch()
  const [SumTotal,setSumTotal]=useState(0)
  const user = useSelector(state=>state.auth.user)
  const navigate = useNavigate()

  useEffect(()=>{
    const Sum = ()=>{
      let total =0
      Carts.map(item=>{
        total= total + item.totalPrice
        setSumTotal(total)
      })
    }
    Sum()
  },[Carts])


  const handleClick = ()=>{
    dispatch(addOrder({
      customer:user.info,
      order:Carts,
      totalPrice:SumTotal
    }))

    // emailjs.sendForm('service_2zjycvp', 'template_gfn6mmb', {order:'get order'}, 'tBloH4rzRZk_fzwcb')

    alert('thanks for order.')
    dispatch(resetCart())
    navigate('/')
  }

  return (
    <div className='cart'>
      <div className='cart-header'>
        <h1>Products Order</h1> 
      </div>
      <div className='cart-list'>
        <table>
          <tbody>
            <tr>
              <th>Products</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>

            {Carts && Carts.map(item=>(
              <tr key={item.id}>
                <td><img src={item.img} alt="" /></td>
                <td><h4>{item.title}</h4></td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.totalPrice}</td>
              </tr>
            ))}

          </tbody>
        </table>
        <div className='checkout'>
          <h2>CART TOTAL</h2>
          <div>
            <p>Subtotal : ${SumTotal}</p>
            <p>Discount : $0.00</p>
            <p>Total : ${SumTotal}</p>
          </div>
          <button className='btn-checkout'
            disabled={Carts.length>0 ? false : true}
            onClick={handleClick}
          >CHECKOUT NOW</button>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart