// import combineReducers to combine all slices
import { combineReducers } from '@reduxjs/toolkit';

//import all slices
import countriesSlice from './slices/countriesSlice';
import countrySlice from './slices/countrySlice';

// create a variable and call combineReducer and pass all slices and export
const rootReducer = combineReducers({
    countries: countriesSlice,
    country: countrySlice,
});

export default rootReducer;
