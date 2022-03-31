import './allfood.css'
import React,{useEffect} from 'react'
import Items from '../Items/Items'
import { useSelector } from 'react-redux'

const AllFood = () => {
    const products = useSelector(state=>state.product.products)
  return (
    <div className='allfood'>
        <div className='allfood-header'>
          <h1>All Food</h1>
        </div>
        <Items products={products}/>
    </div>
  )
}

export default AllFood