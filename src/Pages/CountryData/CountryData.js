import React from 'react';
import './CountryData.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CountryData = () => {
    const navigate = useNavigate();
    const countryData = useSelector((state) => state.country.countryData);
    const weatherData = useSelector((state) => state.country.weatherData);

    if (!countryData || !weatherData) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className='countryData'>
            <h1>{countryData?.name.common}</h1>
            <img src={countryData?.flags.png} alt={countryData?.name.common} />
            <div className='countryData-body'>
                <h2>Details:</h2>
                <h3>Capital: {countryData?.capital}</h3>
                <h3>Region: {countryData?.region}</h3>
                <h3>Latitude: {countryData?.latlng[0]}</h3>
                <h3>Longitude: {countryData?.latlng[1]}</h3>
                <h3>Current Temperature: {weatherData?.main.temp}</h3>
                <div>
                    <span>Borders:</span>
                    {countryData?.borders?.map((border, index) => {
                        return <span key={index}>{border},</span>;
                    })}
                </div>
                <div>
                    <span>Alternate Names:</span>
                    {countryData?.altSpellings?.map((name, index) => {
                        return <span key={index}>{name},</span>;
                    })}
                </div>
                <button onClick={() => navigate('/')}>Back</button>
            </div>
        </div>
    );
};

export default CountryData;
