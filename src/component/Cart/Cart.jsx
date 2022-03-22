import './cart.css'
import React from 'react'
import { carts } from '../../features/Cart/CartSlide'
import { useSelector } from 'react-redux'

const Cart = () => {
  const Carts = useSelector(carts)
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
              <th>Total</th>
            </tr>

            {Carts && Carts.map(item=>(
              <tr key={item.id}>
                <td><img src={item.img} alt="" /></td>
                <td><h3>{item.title}</h3></td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.total}</td>
              </tr>
            ))}

          </tbody>
        </table>
        <div className='checkout'>
          <h2>CART TOTAL</h2>
          <div>
            <p>Subtotal : $20.00</p>
            <p>Discount : $0.00</p>
            <p>Total : $20.00</p>
          </div>
          <button className='btn-checkout'>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Cart