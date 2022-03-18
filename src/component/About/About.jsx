import './about.css'
import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <div className='about-header'>
          <h1>About Us</h1>
        </div>
        <div className='about-us'>
          <div className='about-logo'>
            <img src="https://cdn.eatigo.com/restaurant-image/5000290_a2dc216d-bb2b-4f0f-b777-7eb4cd398d61.png" alt="" />
          </div>
          <div className='about-details'>
            <h1>The Restaurant</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sit necessitatibus dignissimos placeat sed tempore, sequi ullam voluptas non itaque, veniam nam ipsam officiis. Eveniet suscipit deserunt similique animi cumque?
            </p>
          </div>
        </div>
    </div>
  )
}

export default About