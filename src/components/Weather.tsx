// core
import React, { FC } from 'react';

// types
import { WeatherData } from '../store/types';

// icons
import TemperatureSvg from './SVG/TemperatureSvg';
import HumiditySvg from './SVG/HumiditySvg';
import GeoSvg from './SVG/GeoSvg';
import PressureSvg from './SVG/PressureSvg';
import WindSvg from './SVG/WindSvg';

// ts
interface WeatherProps {
  data: WeatherData;
}


const Weather: FC<WeatherProps> = ({ data }) => {
  return (
    <section className='weather'>
      <div className='weather__title'>
        <GeoSvg />
        <h1>{data.name} - {data.sys.country}</h1>
      </div>

      <div className='weather__inner'>
        <div className='weather__item'>
          <p className='weather__item-title'>Условия</p>
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="Иконка погодных условий" />
          <span className='weather__item-value'>{data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1)}</span>
        </div>

        <div className='weather__item'>
          <p className='weather__item-title'>Температура</p>
          <TemperatureSvg />
          <span className='weather__item-value'>{Math.ceil(data.main.temp_min)} / {Math.ceil(data.main.temp_max)} <sup>&#8451;</sup></span>
        </div>

        <div className='weather__item'>
          <p className='weather__item-title'>Влажность</p>
          <HumiditySvg />
          <span className='weather__item-value'>{data.main.humidity}</span>
        </div>

        <div className='weather__item'>
          <p className='weather__item-title'>Давление</p>
          <PressureSvg />
          <span className='weather__item-value'>{data.main.pressure}</span>
        </div>

        <div className='weather__item'>
          <p className='weather__item-title'>Ветер</p>
          <WindSvg />
          <span className='weather__item-value'>{data.wind.speed} m/s</span>
        </div>
      </div>
    </section>
  );
}

export default Weather;