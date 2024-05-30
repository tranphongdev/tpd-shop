import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts: [],
};

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.carts[itemIndex].qty += 1;
            } else {
                const temp = { ...action.payload, qty: 1 };
                state.carts = [...state.carts, temp];
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
