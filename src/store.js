import { configureStore } from '@reduxjs/toolkit';

// import rootReducer, where we combined all slices
import rootReducer from './rootReducer';

export const store = configureStore({
    devTools: false,
    // assign rootReducer to reducer
    reducer: rootReducer,
});
