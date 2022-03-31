import './loginpage.css'
import { reset,Login} from '../features/Auth/AuthSlide'
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Loginpage = () => {
  const {user,isError,isLoading,isSuccess,message}=useSelector(state=>state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData,setFormData]=useState({
    email:'',
    password:'',
  })

  const {email,password}=formData

  const onChange = (e)=>{
    setFormData(prevState=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  useEffect(()=>{

    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())

  },[user,isLoading,isError,isSuccess,message,navigate,dispatch])

  const onSubmit = (e)=>{
    e.preventDefault()

    const userData= {
      email,password
    }
    dispatch(Login(userData))
  }


  return (
    <motion.div className='login'
      initial={{x:'90vw'}}
      animate={{x:0}}
      transition={{delay:0.2 , duration:0.7}}
    >
      <div className='login-header'>
        <h1>Login to use setting</h1>
        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, dolorum?</small>
      </div>
      <form className='login-form' onSubmit={onSubmit}>
        <input type="email" name='email' onChange={onChange} placeholder='Your Email'/>
        <input type="password" name='password' onChange={onChange} placeholder='password' />
        <button className='btn-login'>Login</button>
      </form>
      <div className='create-new'>
        <p>Not Register?</p>
        <Link to={'/register'}>Create an account.</Link>
      </div>
    </motion.div>
    )
}

export default Loginpage