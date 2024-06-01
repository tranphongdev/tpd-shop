import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    isOpenLogin: false,
    isLogin: localStorage.getItem('username') !== '' && (localStorage.getItem('username') ?? false),
    username: localStorage.getItem('username') ?? '',
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        doLogin: (state, action) => {
            if (action.payload.username === 'tranphongdev' && action.payload.password === '123456') {
                localStorage.setItem('username', action.payload.username);
                toast.success('Login successfuly!');
                return {
                    ...state,
                    isOpenLogin: false,
                    isLogin: true,
                    username: action.payload.username,
                };
            } else {
                toast.error('Username or password not found! Please try!');
            }
            return state;
        },
        upDateStateOpenLogin: (state, action) => {
            return {
                ...state,
                isOpenLogin: action.payload,
            };
        },
        doLogout: (state) => {
            localStorage.removeItem('username');
            return {
                ...state,
                isOpenLogin: false,
                isLogin: false,
                userName: '',
            };
        },
    },
});

export const { doLogin, upDateStateOpenLogin, doLogout } = authSlice.actions;
export default authSlice.reducer;
