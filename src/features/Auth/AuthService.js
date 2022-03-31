import axios  from "axios";

// register user
const register = async (userData)=>{
    const res = await axios.post('/auth/register',userData)

    if(res.data){
        localStorage.setItem('user',JSON.stringify(res.data))
    }

    return res.data
}

// user login
const login = async (userData)=>{
    const res = await axios.post('/auth/login',userData)

    if(res.data){
        localStorage.setItem('user',JSON.stringify(res.data))
    }
}

// user logout
const logout = ()=>{
    localStorage.removeItem('user')
}

const AuthService ={
    register,
    login,
    logout,
}

export default AuthService