import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  cart:[],
};


export const CartSlide = createSlice({
  name: 'cart',
  initialState,
 
  reducers: {
    addCart: (state,action) => {
      state.cart=[...state.cart,action.payload]
    },
    resetCart:(state)=>{
      state.cart=[]
    }
  },
});

export const { addCart, resetCart} = CartSlide.actions;

export const selectCount = (state) => state.cart.value;
export const carts =(state)=>state.cart.cart;


export default CartSlide.reducer;
