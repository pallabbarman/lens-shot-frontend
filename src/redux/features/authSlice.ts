import { getFromLocalStorage } from '@/utils/storage';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: getFromLocalStorage('auth') || '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload;
        },
        userLoggedOut: (state) => {
            state.accessToken = '';
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
