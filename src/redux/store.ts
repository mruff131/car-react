import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/RootSlice";
//the Redux store serves as a centralized hub for managing your application's state, 
//providing a predictable and maintainable way to handle state changes across your application
const store = configureStore({
    reducer,
    devTools: true,
});

export default store;