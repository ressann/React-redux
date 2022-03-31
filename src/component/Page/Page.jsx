import './page.css'
import React, { useEffect } from 'react'
import Items from '../Items/Items'
import { useDispatch, useSelector } from 'react-redux'
import { getTypeProducts } from '../../features/Products/ProductSlide'
import { useLocation } from 'react-router-dom'


const Page = () => {
    const dispatch= useDispatch()
    const url= useLocation()
    const query = new URLSearchParams(url.search)

    const typePro= useSelector(state=>state.product.typePro)
    useEffect(()=>{
       if(query.get('type')===null){
         dispatch(getTypeProducts())
       }else{
        dispatch(getTypeProducts(query.get('type')))
       }
    },[url.search])
  return (
    <div className='page'>
      <div className='page-header'>
        <h1>Home Page</h1>
      </div>
      <Items products={typePro}/>
    </div>
  )
}

export default Page