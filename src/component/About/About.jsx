import './about.css'
import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className='about'>
        <div className='about-header'>
          <motion.h1
            initial={{x:-150}}
            animate={{x:0}}
            transition={{duration:.5,type:'spring'}}
          >About Us</motion.h1>
        </div>
        <div className='about-us'>
          <div className='about-logo'>
            <img src="https://cdn.eatigo.com/restaurant-image/5000290_a2dc216d-bb2b-4f0f-b777-7eb4cd398d61.png" alt="" />
          </div>
          <div className='about-details'>
            <motion.h1
              initial={{y:-900,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:.7}}
            >The Restaurant</motion.h1>
            <motion.p
              initial={{x:900,opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{delay:0.5,type:'spring',duration:.7}}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sit necessitatibus dignissimos placeat sed tempore, sequi ullam voluptas non itaque, veniam nam ipsam officiis. Eveniet suscipit deserunt similique animi cumque?
            </motion.p>
          </div>
        </div>
    </div>
  )
}

export default About