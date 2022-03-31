import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get all products
export const getProducts = createAsyncThunk('product/getProducts',
    async ()=>{
        const res = await axios.get('/food/allfood',{
            headers:{
                token:`bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`
            }
        })
        return res.data
    }
)

// get state products
export const getTypeProducts = createAsyncThunk('product/getTypeProducts',
    async (type)=>{
        const res = await axios.get(`/food${type ? '?type='+type:''}`,{
            headers:{
                token:`bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`
            }
        })
        return res.data
    }
)

const ProductSlide = createSlice({

    name:'product',
    initialState:{
        products:[],
        typePro:[],
        status:false,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getProducts.fulfilled,(state,action)=>{
                state.status= true
                state.products=action.payload
            })
            .addCase(getTypeProducts.fulfilled,(state,action)=>{
                state.status=true
                state.typePro=action.payload
            })
    }

})

export default ProductSlide.reducer;