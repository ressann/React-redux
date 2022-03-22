import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
  cart:[],
  status: 'idle',
};


export const CartSlide = createSlice({
  name: 'cart',
  initialState,
 
  reducers: {
    addCart: (state,action) => {
      state.value += 1;
      state.cart=[...state.cart,action.payload]
    }
  },
});

export const { addCart, decrement} = CartSlide.actions;

export const selectCount = (state) => state.cart.value;
export const carts =(state)=>state.cart.cart;


export default CartSlide.reducer;
