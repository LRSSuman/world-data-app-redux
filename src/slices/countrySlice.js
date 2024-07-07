// import createAsyncThunk to create middleware
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    countryData: null,
    weatherData: null,
};

// create a variable and call createAsyncThunk and pass a name,async function
// in middleware async function we can pass only one argument so pass argument as object
export const getWheatherData = createAsyncThunk(
    'country/getcountrywheather',
    async ({ lat, lng, country }) => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=72db28db77fcab821faacf5b4ac7c646&units=metric`
        );
        return { wheatherData: response.data, countryData: country };
    }
);
// set the response data in extraReducers

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        removeCountry(state, action) {
            state.countryData = null;
            state.weatherData = null;
        },
    },
    // assign a function to extraReducers and pass parameter 'builder'
    extraReducers: (builder) => {
        // call addCase from 'builder' and pass middleware function, reducer function which assign a state
        // middleware function return three state(fulfilled,pending,rejected)
        builder.addCase(getWheatherData.fulfilled, (state, action) => {
            state.weatherData = action.payload.wheatherData;
            state.countryData = action.payload.countryData;
        });
        // you can chain the multiple middleware and middleware state
        // .addCase(getWheatherData.pending,()=>{}).addCase(getWheatherData.rejected,()=>{}).addCase(anotherMiddleware.fulfilled,()=>{})
    },
});

export const { removeCountry } = countrySlice.actions;
export default countrySlice.reducer;
