import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import CountryFlag from 'react-country-flag';
import moment from 'moment';

const ClockComponent = () => {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    fetch('https://geolocation-db.com/json/')
      .then(response => response.json())
      .then(data => setLocationData(data));
  }, []);

  const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' };
    return date.toLocaleDateString(undefined, options);
  };

  const getCurrentTime = () => {
    const timeStr = moment().format('HH:mm');
    return timeStr;
  };

  return (
    <div>

        {locationData && (
                    <div className='flex flex-row items-center text-[10px]  w-[200px] md:w-[18vw] md:mb-0 mb-7 '>
                    <div className='flex justify-end flex-col w-full'>
                  <div className='flex flex-row uppercase justify-end tracking-[2px] text-right'>{getCurrentTime()} {locationData.city} {locationData.country_name}</div>
                    <div className='flex flex-row text-golden uppercase w-full justify-end tracking-[1px] text-right  '>{getCurrentDate()}</div>
                    </div>
                        <p className='mx-5'>
                          <CountryFlag countryCode={locationData.country_code} svg           style={{
            width: '25px',
            height: '25px',
            objectFit: 'cover',
          }}  className='rounded-lg w-[100%]'/>
                        </p>
                    </div>

        )}

      </div>

  );
};

export default ClockComponent;
