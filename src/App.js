import React from 'react';
import Home from './Pages/Home/Home';
import CountryData from './Pages/CountryData/CountryData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='/country' element={<CountryData />} />
            </Routes>
        </Router>
    );
};

export default App;
