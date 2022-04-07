import './order.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCart,carts } from '../../features/Cart/CartSlide'


const Order = () => {
    const Carts=useSelector(carts)
    const param = useParams()
    const id = param.id
    const [totalPrice,setTotalPrice]=useState(0)
    const [quantity,setQuantity]=useState(0)
    const dispatch = useDispatch()
    const products = useSelector(state=>state.product.products)
    const [indexPro,setIndexPro]=useState(null)

    useEffect(()=>{
        const getOrder = ()=>{
            products.map((item,index)=>{
                if(item._id === id){
                    setIndexPro(index)
                    if(indexPro !=null){
                        return indexPro
                    }
                }
            })
        }
        getOrder()
    },[id])

    const handleOrder=(e)=>{
        e.preventDefault()
        dispatch(addCart({
            title:products[indexPro].title,
            img:products[indexPro].image,
            price:products[indexPro].price,
            quantity:quantity,
            totalPrice:totalPrice,
            id:Math.random(),
        }))
    }
    

  return (
    <div className='order'>
        <div className='order-header'>
            <h1>Get Order The Food</h1>
        </div>
        {products[indexPro] && 
        <div className='order-list'>
            <img src={products[indexPro].image} alt="" />
            <form>
                <h2>{products[indexPro].title}</h2>
                <p>Price : {products[indexPro].price}$</p>

                <div className='order-number'>
                    <label htmlFor="quantity">Quantity : </label>
                    <input type="number" name='quantity' id='quantity'
                    min={0}
                        onChange={(e)=>{
                            setQuantity(e.target.value)
                            setTotalPrice(e.target.value * products[indexPro].price )
                        }}
                    />
                </div>

                <p>Total Price : {totalPrice}$</p>

                <button 
                    disabled={totalPrice ===0 ? true:false}
                    onClick={(e)=>handleOrder(e)}
                >Get Order</button>
            </form>
        </div>
        }
    </div>
  )
}

export default Order