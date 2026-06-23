import {configureStore} from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        theme:themeReducer
    },
});

export default store;