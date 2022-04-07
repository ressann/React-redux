import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

//add order (sale food)
export const addOrder = createAsyncThunk('order/addOrder',
    async (dataOrder)=>{
        const res = await axios.post('/salefood/add',dataOrder,{
            headers:{
                token:`bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`
            }
        })
        return res.data
    }
)

// get order (get data sale food)
export const getOrder = createAsyncThunk('order/getOrder',
    async ()=>{
        const res = await axios.get('/salefood',{
            headers:{
                token:`bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`
            }
        })
        return res.data
    }
)

const orderSlide = createSlice({
    name:'order',
    initialState:{
        order:null,
        status:false
    },
    reducers:{},
    extraReducers:builder=>{
        builder
            .addCase(addOrder.fulfilled,state=>{
                state.status=true
            })
            .addCase(getOrder.fulfilled,(state,action)=>{
                state.status=true
                state.order = action.payload
            })
    }

})


export default orderSlide.reducer;