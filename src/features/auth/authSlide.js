import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const authSlide = createSlice({
    name:'auth',
    initialState:{
        isLogin : false,
        isLogout : false,
        status:false,
    },
    reducers:{
        login (state){
            state.isLogin = true
            state.isLogout =false
        },
        logout (state){
            state.isLogout=true
            state.isLogin=false
        }
    },
    extraReducers:(build)=>{

    }
})

export const {login,logout} = authSlide.actions;

export default authSlide.reducer;