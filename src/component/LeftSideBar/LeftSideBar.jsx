import './leftsidebar.css'
import React from 'react'
import {ImSpoonKnife} from 'react-icons/im'
import ListProducts from '../ListProducts/ListProducts'

const LeftSideBar = ({active}) => {
  return (
    <div className={ active ? 'leftside' : 'leftside active'}>
        <div className='header-leftside'>
            <ImSpoonKnife className='leftside-icon'/>
            <h2>List Of Product</h2>
        </div>
        <div className='search'>
            <input type="text" name='search' placeholder='Search' />
        </div>
        <ListProducts/>
    </div>
  )
}

export default LeftSideBar