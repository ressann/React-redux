import './searchpage.css'
import React, { useEffect, useState } from 'react'
import Items from '../../component/Items/Items'
import { useSelector } from 'react-redux'

const Searchpage = () => {
    const products= useSelector(state=>state.product.products)
    const search = useSelector(state=>state.search.search)
    const [foodSearch,setFoodSearch]=useState([])
    useEffect(()=>{
        const filterSearch=()=>{
            if(search===''){
                return setFoodSearch(products)
            }
          let filters= products.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
          return setFoodSearch(filters)
        }
        filterSearch()
    },[search])
  return (
    <div className='search-page'>
        <div className='search-page-header'>
            <h1>Search Food Name</h1>
        </div>
        <Items products={foodSearch}/>
    </div>
  )
}

export default Searchpage