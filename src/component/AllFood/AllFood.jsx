import './allfood.css'
import React,{useEffect} from 'react'
import Items from '../Items/Items'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const AllFood = () => {
    const products = useSelector(state=>state.product.products)
  return (
    <div className='allfood'>
        <div className='allfood-header'>
          <motion.h1
            initial={{x:500,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{delay:.5,duration:.5,type:'spring'}}
          >All Food</motion.h1>
        </div>
        <Items products={products}/>
    </div>
  )
}

export default AllFood