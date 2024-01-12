import { configureStore } from '@reduxjs/toolkit';
import baseApi from '../features/api';
import authSliceReducer from '../features/authSlice';

const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authSliceReducer,
    },
    devTools: process.env.NODE_ENV != 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
