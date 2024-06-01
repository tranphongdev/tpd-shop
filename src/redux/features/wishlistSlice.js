import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    wishlist: [],
};

export const wishlistSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            const itemIndex = state.wishlist.findIndex((item) => item.id === action.payload.id);

            if (itemIndex > 0) {
                toast.error('Sản phẩm đã tồn tại!');
            } else {
                return {
                    ...state,
                    wishlist: action.payload,
                };
            }
        },
    },
});

export const { addToWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
