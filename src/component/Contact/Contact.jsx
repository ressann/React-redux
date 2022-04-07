import './contact.css'
import React, { useRef } from 'react'
import{RiMessengerLine} from 'react-icons/ri'
import {AiFillFacebook} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2zjycvp', 'template_gfn6mmb', form.current, 'tBloH4rzRZk_fzwcb')
        e.target.reset()
        alert('Thanks for message.')
      };

  return (
    <div className='contact'>
        <div className='contact-header'>
            <motion.h1
                initial={{x:-500}}
                animate={{x:0}}
                transition={{delay:.5,duration:.5,type:'spring'}}
            >Contact Us</motion.h1>
        </div>
        <div className='contact-list'>
            <div className='social-media' >
                <motion.a 
                    initial={{y:900,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:.5,type:'spring'}}
                    className='media' target={'_blank'} href='https://m.me/ta.tochzin.9'>
                    <RiMessengerLine className='media-icon'/>
                    <h4>Messenger</h4>
                    <p>Send message</p>
                </motion.a>
                <motion.a 
                    initial={{x:900,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:.5,type:'spring'}}
                    className='media' target={'_blank'} href='https://web.facebook.com/?_rdc=1&_rdr'>
                    <AiFillFacebook className='media-icon'/>
                    <h4>Facebook</h4>
                    <p>Send message</p>
                </motion.a>
                <motion.a 
                    initial={{x:-900,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:.5,type:'spring'}}
                    className='media' target={'_blank'} href='https://t.me/ressann_la' >
                    <BsTelegram className='media-icon'/>
                    <h4>Telegram</h4>
                    <p>Send message</p>
                </motion.a>
            </div>
            <form className='contact-form' ref={form} onSubmit={(e)=>sendEmail(e)}>
                <h2>Send Message To Us</h2>
                <input type="text" name='name' placeholder='Your Full Name' />
                <input type="email" name='email' placeholder='Your Email' />
                <textarea name="message" id="message" cols="30" rows="5" placeholder='Your Message'></textarea>
                <motion.button
                initial={{y:900,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:.5,type:'spring'}}
                className='btn-contact'>Contact Now</motion.button>
            </form>
        </div>
    </div>
  )
}

export default Contact