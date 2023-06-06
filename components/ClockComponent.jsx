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
                    <div className='flex flex-row items-center text-[10px] tracking-[2px]'>
                    <div>
                  <div className='flex flex-row uppercase'><div>{getCurrentTime()} {locationData.city} {locationData.country_name}</div></div>
                    <div className='flex flex-row text-golden uppercase'>{getCurrentDate()}</div>
                    </div>
                        <p className='mx-5'>
                          <CountryFlag countryCode={locationData.country_code} svg style={{ width: '3em', height: '2em' }} />
                        </p>
                    </div>

        )}

      </div>

  );
};

export default ClockComponent;
