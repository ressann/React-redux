import './cart.css'
import React, { useEffect, useState } from 'react'
import { carts } from '../../features/Cart/CartSlide'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
  const Carts = useSelector(carts)

  // const handleToken = async (token,address)=>{
  //   console.log(token,address)
  // }
  // const [product]= useState({
  //   name:'Khmer Food',
  //   price:20,
  // })
  const [SumTotal,setSumTotal]=useState(0)

  useEffect(()=>{
    const Sum = ()=>{
      let total =0
      Carts.map(item=>{
        total= total + item.total
        setSumTotal(total)
      })
    }
    Sum()
  },[Carts])

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
                <td><h4>{item.title}</h4></td>
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
            <p>Subtotal : ${SumTotal}</p>
            <p>Discount : $0.00</p>
            <p>Total : ${SumTotal}</p>
          </div>
          <button className='btn-checkout'>CHECKOUT NOW</button>
          <div>
            {/* <StripeCheckout
              stripeKey='pk_test_51KgK2pJxTIaiKqvfixE2SKoOrj6xOvGhE1nuPEUN6Gf2dYni1Cuc12RGdwM0ZO224sCSxNOBt8nARFJgvM05Ej2i005hQCbjKZ'
              token={handleToken}
              billingAddress
              shippingAddress
              amount={product.price}
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart