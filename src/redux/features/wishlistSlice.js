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
            const itemIndex = state.wishlist.find((item) => item.id === action.payload.id);

            if (!itemIndex) {
                state.wishlist.push(action.payload);
                toast.success('Add wishlist success!');
            } else {
                toast.error('Sản phẩm này đã thêm rồi!');
            }
        },
        deleteWishList: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addToWishList, deleteWishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;
