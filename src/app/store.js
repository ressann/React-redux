import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/Cart/CartSlide'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
  },
});
