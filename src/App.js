import React, { useEffect } from 'react';
import Home from './Home/Home';
import {Route, Routes, useNavigate} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { useSelector ,useDispatch} from 'react-redux';
import Registerpage from './RegisterPage/Registerpage'
import Loginpage from './LoginPage/Loginpage'
import Admin from './Admin/Admin';
import {getProducts} from './features/Products/ProductSlide'

function App() {
  const user = useSelector(state=>state.auth.user)
  const dispatch = useDispatch()
  const navigate= useNavigate()
  useEffect(()=>{
    dispatch(getProducts())
    if(user){
      navigate('/')
    }else{
      navigate('/register')
    }
  },[user])
  return (
    <div className="App">
      <Routes>
        {!user && <>
          <Route path='/*' element={''}/>
          <Route path='/register' element={<Registerpage/>}/>
          <Route path='/login' element={<Loginpage/>}/>
          </>
        }
        {
          user && user.info.isAdmin ? <Route path='/admin/*' element={<Admin/>}/> : ''
        }
        {user && <>
          <Route path='/*' element={<Home/>}/>
        </>}
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
