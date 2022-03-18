import './footer.css'
import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-list'>
            <div className='footer-item'>
                <h2>Address</h2>
                <div>
                    <h4>2 Presahnetr Preah Street.</h4>
                    <h4>Banteay Meanchey Province,Cambodia.</h4>
                </div>
            </div>
            <div className='footer-item'>
                <h2>Opening Hours</h2>
                <div>
                    <h4>Mon - Fri: 9am - 5pm.</h4>
                    <h4>Sat - Sun: 8am - 8pm.</h4>
                </div>
            </div>
            <div className='footer-item'>
                <h2>Contact Us</h2>
                <div>
                    <h4>foodorder@gmail.com,</h4>
                    <h4>+885 665 301 66</h4>
                </div>
            </div>
        </div>
        <hr />
        <div className='copy-right'>
            <p><AiOutlineCopyrightCircle/><span> 2022 by Mr.ressann_la</span></p>
        </div>
    </div>
  )
}

export default Footer