import './home.css'
import React, { useState } from 'react'
import NavBar from '../component/NavBar/NavBar'
import LeftSideBar from '../component/LeftSideBar/LeftSideBar'
import RightSideBar from '../component/RightSideBar/RightSideBar'
import {GiKnifeFork} from 'react-icons/gi'
import { useSelector } from 'react-redux'

const Home = () => {
  const user = useSelector(state =>state.auth.user)
  const [showLeftside,setShowLeftside]= useState(true)
  const handleActive = ()=>{
    setShowLeftside(!showLeftside)
  }
  return (
    <div className='home'>
      {user &&
      <>
        <NavBar/>
        <div className='container'>
          <GiKnifeFork className='showlist-icon'
            onClick={()=>handleActive()}
          />
          <LeftSideBar active={showLeftside}/>
          <RightSideBar/>
        </div> 
      </>
      }
    </div>
  )
}

export default Home