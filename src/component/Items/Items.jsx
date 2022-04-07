import './items.css'
import React from 'react'
import { useNavigate} from 'react-router-dom'

const Items = ({products}) => {
    const navigate = useNavigate()
    const handleOrder = (id)=>{
        navigate(`/order/${id}`)
    }
  return (
    <div className='items'>
        {products && products.map(item=>{
            return (

             <div className='item' key={item._id}>
                 <img className='image' src={item.image} alt="" />
                 <div className='info-item'>
                     <h4>{item.title}</h4>
                     <small>{item.details}</small>
                     <p>Price : {item.price}$</p>
                     <div className='btn'>
                         <button className='btn-details'>Details</button>
                         <button className='btn-order'
                             onClick={()=>handleOrder(item._id)}
                         >Order</button>
                     </div>
                 </div>
             </div>
            )
        })}
    </div>
  )
}

export default Items