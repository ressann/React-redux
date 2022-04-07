import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/Cart/CartSlide'
import AuhtReducer from '../features/Auth/AuthSlide'
import productReducer from '../features/Products/ProductSlide'
import searchReducer from '../features/Search/SearchSlide'
import orderSlide from '../features/customerOrder/orderSlide';

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    auth:AuhtReducer,
    product:productReducer,
    search:searchReducer,
    order:orderSlide,
  },
});
