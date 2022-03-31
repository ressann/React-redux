import './contact.css'
import React, { useRef } from 'react'
import{RiMessengerLine} from 'react-icons/ri'
import {AiFillFacebook} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2zjycvp', 'template_gfn6mmb', form.current, 'tBloH4rzRZk_fzwcb')
        e.target.reset()
        alert('Thanks for message.')
      };
      const navigate =useNavigate()

  return (
    <div className='contact'>
        <div className='contact-header'>
            <h1>Contact Us</h1>
        </div>
        <div className='contact-list'>
            <div className='social-media' >
                <a className='media' target={'_blank'} href='https://m.me/ta.tochzin.9'>
                    <RiMessengerLine className='media-icon'/>
                    <h4>Messenger</h4>
                    <p>Send message</p>
                </a>
                <a className='media' target={'_blank'} href='https://web.facebook.com/?_rdc=1&_rdr'>
                    <AiFillFacebook className='media-icon'/>
                    <h4>Facebook</h4>
                    <p>Send message</p>
                </a>
                <a className='media' target={'_blank'} href='https://t.me/ressann_la' >
                    <BsTelegram className='media-icon'/>
                    <h4>Telegram</h4>
                    <p>Send message</p>
                </a>
            </div>
            <form className='contact-form' ref={form} onSubmit={(e)=>sendEmail(e)}>
                <h2>Send Message To Us</h2>
                <input type="text" name='name' placeholder='Your Full Name' />
                <input type="email" name='email' placeholder='Your Email' />
                <textarea name="message" id="message" cols="30" rows="5" placeholder='Your Message'></textarea>
                <button className='btn-contact'>Contact Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact