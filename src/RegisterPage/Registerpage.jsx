import './registerpage.css'
import { useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { reset ,Register} from '../features/Auth/AuthSlide'
import {toast} from 'react-toastify'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'


const Registerpage = () => {
  const navigate =useNavigate()
  const dispatch = useDispatch()
  let passRef=useRef()
  let pass2Ref=useRef()

  const checkPassword =()=>{
    if(passRef.current.type==='password'){
      pass2Ref.current.type='text'
      passRef.current.type='text'
    }else{
      pass2Ref.current.type='password'
      passRef.current.type='password'
    }
  }

  const {user,isLoading,isError,isSuccess,message}= useSelector(state=>state.auth)

  const [formData,setFormData]=useState({
    username:'',
    email:'',
    password:'',
    password2:'',
  })

 

  useEffect(()=>{

    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())

  },[user,isLoading,isError,isSuccess,message,navigate,dispatch])

  const {username,email,password,password2}= formData

  const onChange =(e)=>{
    setFormData(prevState=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }
  const onSumite = async (e)=>{
    e.preventDefault()

    if(password !== password2){

      toast.error('password do not match!')
      console.log('pass error')

    }else{

      const userData ={
        username,
        email,
        password,
      }

     dispatch(Register(userData))

    }
  }

  return (
    <motion.div className='register'
      initial={{x:'90vw'}}
      animate={{x:0}}
      transition={{delay:0.2 , duration:0.7}}
    >
      <div className='register-header'>
        <h1>Register</h1>
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, est.</small>
      </div>
      <form className='register-form' onSubmit={onSumite}>
          <input type="text" name='username' placeholder='Your Username' 
            onChange={onChange}
          />
          <input type="email" name='email' placeholder='Your Email' 
            onChange={onChange}
          />
          <input ref={passRef} type="password" name='password' placeholder='password' 
            onChange={onChange}
          />

          <input ref={pass2Ref} type="password" name='password2' placeholder='password2' 
            onChange={onChange}
          />

          <div className='check-password'>
            <input onChange={checkPassword}  type="checkbox" id='check' name='check' />
            <label htmlFor="check">show password</label>
          </div>

          <button className='btn-register'>Register Now</button>
      </form>
      <div className='sing-in'>
        <p>Do you have an account?</p>
        <Link to={'/login'}>Sign In</Link>
      </div>
    </motion.div>
  )
}

export default Registerpage