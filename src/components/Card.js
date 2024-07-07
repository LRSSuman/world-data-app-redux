import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getWheatherData } from '../slices/countrySlice';

const Card = ({ country }) => {
    const dispatch = useDispatch();
    const setCountryData = () => {
        const countryWheather = {
            lat: country.latlng[0],
            lng: country.latlng[1],
            country: country,
        };
        // we can pass only one argument in middleware, so pass as an object
        dispatch(getWheatherData(countryWheather));
    };
    return (
        <Link to='./country' onClick={setCountryData}>
            <div className='card'>
                <h3 className='card-title'>{country.name.common}</h3>
                <img src={country.flags.png} alt={country.name.common} />
                <div className='card-body'>
                    <h1>Details:</h1>
                    <p>Capital: {country.capital}</p>
                    <p>Region: {country.region}</p>
                    <p>Latitude: {country.latlng[0]}</p>
                    <p>Longitude: {country.latlng[1]}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
