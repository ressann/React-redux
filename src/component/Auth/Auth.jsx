import './auth.css'
import React from 'react'

const Auth = () => {
  return (
    <div className='auth'>
        <form className='form-login'>
            <input type="email" required name='email' />
            <input type="password" name='password' required />
            <button className='btn-login'>Login</button>
        </form>
    </div>
  )
}

export default Auth