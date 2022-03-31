import './order.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCart,carts } from '../../features/Cart/CartSlide'


const Order = () => {
    const Carts=useSelector(carts)
    const param = useParams()
    const id = param.id
    const [total,setTotal]=useState(0)
    const [quantity,setQuantity]=useState(0)
    const dispatch = useDispatch()

    useEffect(()=>{
        const sumTotal =()=>{
            setTotal(quantity*products[0].price)
        }
        sumTotal()

    },[quantity])

    const handleOrder=(e)=>{
        e.preventDefault()
        dispatch(addCart({
            title:products[0].title,
            img:products[0].image,
            price:products[0].price,
            quantity:quantity,
            total:total,
            id:Math.random(),
        }))
    }

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