import './leftsidebar.css'
import React from 'react'
import {ImSpoonKnife} from 'react-icons/im'
import ListProducts from '../ListProducts/ListProducts'
import Search from '../../SearchBar/Search'

const LeftSideBar = ({active}) => {
  return (
    <div className={ active ? 'leftside' : 'leftside active'}>
        <div className='header-leftside'>
            <ImSpoonKnife className='leftside-icon'/>
            <h2>List Of Product</h2>
        </div>
        <Search/>
        <ListProducts/>
    </div>
  )
}

export default LeftSideBar