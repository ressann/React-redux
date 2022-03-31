import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./AuthService";

// register user
export const Register = createAsyncThunk('auth/Register',
    async (user,thunkAPI)=>{
        try {
            return await AuthService.register(user)
        } catch (error) {
            const message = (error.res && error.res.data && error.res.data.message) ||
                error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// user login
export const Login = createAsyncThunk('auth/Login',
async (user,thunkAPI)=>{
    try {
        return await AuthService.login(user)
    } catch (error) {
        const message = (error.res && error.res.data && error.res.data.message) ||
            error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
)

// user logout
export const Logout = createAsyncThunk('auth/Logout',
    ()=>{
        return AuthService.logout()
    }
)

// get user from localstorage
const user = JSON.parse(localStorage.getItem('user'))

export const AuthSlide = createSlice({
    name:"auth",
    initialState:{
        user:user ? user : null,
        isError:false,
        isSuccess:false,
        isLoading:false,
        message:''
    },
    reducers:{
        reset:(state)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=false
            state.message=''
        }
    },
    extraReducers:(builder) => { 
        builder
                .addCase(Register.pending,(state)=>{
                    state.isLoading=true
                })
                .addCase(Register.fulfilled,(state,action)=>{
                    state.isLoading=false
                    state.isSuccess=true
                    state.user=action.payload
                })
                .addCase(Register.rejected,(state,action)=>{
                    state.isError=true
                    state.isLoading=false
                    state.message=action.payload
                    state.user=null
                })
                .addCase(Login.pending,(state)=>{
                    state.isLoading=true
                })
                .addCase(Login.fulfilled,(state,action)=>{
                    state.isLoading=false
                    state.isSuccess=true
                    state.user=action.payload
                })
                .addCase(Login.rejected,(state,action)=>{
                    state.isError=true
                    state.isLoading=false
                    state.message=action.payload
                    state.user=null
                })
                .addCase(Logout.fulfilled,(state,action)=>{
                    state.user=null
                    state.isError=false
                    state.isLoading=false
                    state.isSuccess=false
                    state.message=''
                })
    },   
})

export const {reset} = AuthSlide.actions;

export default AuthSlide.reducer;