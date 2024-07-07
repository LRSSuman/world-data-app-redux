import React, { useEffect } from 'react';
import './Home.css';
import Card from '../../components/Card';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCountries } from '../../slices/countriesSlice';
import { removeCountry } from '../../slices/countrySlice';
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(removeCountry());
        const fetchData = async () => {
            const response = await axios.get(
                'https://restcountries.com/v3.1/all/'
            );
            dispatch(setCountries(response.data));
        };
        fetchData();
    }, []);

    const countries = useSelector((state) => state.countries);
    return (
        <div className='home'>
            {countries.map((country, index) => {
                return <Card key={index} country={country} />;
            })}
        </div>
    );
};

export default Home;
