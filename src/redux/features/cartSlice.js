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
        addToCartQty: (state, action) => {
            const item = action.payload;
            const existingItem = state.carts.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.qty += item.qty;
            } else {
                state.carts.push({ ...item, qty: item.qty });
            }
        },
        delCartItem: (state, action) => {
            state.carts = state.carts
                .map((item) => (item.id === action.payload ? { ...item, qty: item.qty - 1 } : item))
                .filter((item) => item.qty > 0);
        },
        delCart: (state, action) => {
            const cartNew = state.carts.filter((item) => item.id !== action.payload);
            return {
                ...state,
                carts: cartNew,
            };
        },
        delAllCart: (state) => {
            state.carts = [];
        },
    },
});

export const { addToCart, delCartItem, delCart, addToCartQty, delAllCart } = cartSlice.actions;

export default cartSlice.reducer;
