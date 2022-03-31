import './navbar.css'
import React, { useState } from 'react'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import {FiShoppingBag} from 'react-icons/fi'
import {AiOutlineAlignLeft} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {carts} from '../../features/Cart/CartSlide'
import { Logout } from '../../features/Auth/AuthSlide'
const NavBar = () => {
    const Carts = useSelector(carts)
    let [showList,setShowList]=useState(true)
    const handleShow = ()=>{
        setShowList(!showList)
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout =()=>{
        dispatch(Logout())
    }

  return (
    <div className='navbar'>
        <div className='nav-left'>
            <GiForkKnifeSpoon className='knife-icon' onClick={()=>navigate('/')}/>
        </div>
        <div className='nav-right'>
            <ul className={showList ? 'nav-list' : 'nav-list active'}>
                <Link to={'/'} className='li'>Home</Link>
                <Link to={'/about'} className='li'>About</Link>
                <Link to={'/allfood'} className='li'>All Food</Link>
                <Link to={'/contact'} className='li'>Contact Us</Link>
            </ul>
            <div className='nav-icons'>
                <AiOutlineAlignLeft className='line-icon'
                    onClick={()=>handleShow()}
                />
                <span>
                    <FiShoppingBag className='shopping-icon'
                        onClick={()=>navigate('cart')}
                    /><sup>{Carts.length >0 ? Carts.length : '' }</sup>
                </span>
            </div>
            <div className='logout'>
                <button className='btn-logout'
                    onClick={handleLogout}
                >Logout</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar