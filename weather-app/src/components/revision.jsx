import React from 'react';
import './Weather.css';
import search_icon from '../assets/search-icon.png';
import sunny_icon from '../assets/sunny_icon.jpeg';
import humidity_icon from '../assets/humidity.jpeg';
import wind_icon from '../assets/wind.png';
// import search_icon from '../assets/search-icon.png';
// import search_icon from '../assets/search-icon.png';
// import search_icon from '../assets/search-icon.png';

const Weather = () => {
    return (
        <div className='weather'>
            <div className="search-bar">
                <input type="text" placeholder='Search' />
                <img src={search_icon} alt="" />
            </div>
            <img src={sunny_icon} alt="" className='weather-icon' />
            <p className='temperature'>16º</p>
            <p className='location'>London</p>
            <div className="weather-data">
                <div className="col">
                    <img src={humidity_icon} alt="" />
                    <div>
                        <p>91 %</p>
                        <span>Humidity</span>
                    </div>
                </div>

                  <div className="col">
                    <img src={wind_icon} alt="" />
                    <div>
                        <p>3.6 km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;