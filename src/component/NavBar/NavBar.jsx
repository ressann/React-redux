import './navbar.css'
import React, { useState } from 'react'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import {FiShoppingBag} from 'react-icons/fi'
import {AiOutlineAlignLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const NavBar = () => {
    let [showList,setShowList]=useState(true)
    const handleShow = ()=>{
        setShowList(!showList)
    }
  return (
    <div className='navbar'>
        <div className='nav-left'>
            <GiForkKnifeSpoon className='knife-icon'/>
        </div>
        <div className='nav-right'>
            <ul className={showList ? 'nav-list' : 'nav-list active'}>
                <Link to={'/'} className='li'>Home</Link>
                <Link to={'/about'} className='li'>About</Link>
                <Link to={'/products'} className='li'>Products</Link>
                <Link to={'/order'} className='li'>Order</Link>
            </ul>
            <div className='nav-icons'>
                <AiOutlineAlignLeft className='line-icon'
                    onClick={()=>handleShow()}
                />
                <span>
                    <FiShoppingBag className='shopping-icon'/><sup>2</sup>
                </span>
            </div>
        </div>
    </div>
  )
}

export default NavBar