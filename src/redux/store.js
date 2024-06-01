import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';
import cartReducer from './features/cartSlice';
import authenReducer from './features/authSlice';
import wishListReducer from './features/wishlistSlice';

export const store = configureStore({
    reducer: {
        dataProduct: productReducer,
        dataCart: cartReducer,
        authenSlice: authenReducer,
        dataWishList: wishListReducer,
    },
});
