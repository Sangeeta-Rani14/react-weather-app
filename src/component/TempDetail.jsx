import React, { useState } from 'react'

import { 
    UilTemperature,
    UilSun,
    UilSunset,
    UilTear,
    UilWind
}
    from '@iconscout/react-unicons'

import { makeIconURL,formatToLocalTime } from '../service/weatherservice'


function TempDetail({
    weather: {
        description,
        icon,
        temp,
        temp_min,
        temp_max,
        sunrise,
        sunset,
        speed,
        humidity,
        feels_like,
        timezone,
    },units
},)

{

  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-200'>
            <p>{description}</p>
        </div>

        <div className='flex items-center justify-between py-3 text-white'>
            <img 
            src={makeIconURL(icon)} alt=""  className='w-20'/>
            <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex text-sm font-light items-center justify-center'>
                    <UilTemperature size={17} className="mr-1" />
                    Real feel:
                    <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex text-sm font-light items-center justify-center'>
                    <UilTear size={17} className="mr-1" />
                    Humidity:
                    <span className='font-medium ml-1'>{`${humidity.toFixed()}°`}</span>
                </div>
                <div className='flex text-sm font-light items-center justify-center'>
                    <UilWind size={17} className="mr-1" />
                    Wind:
                    <span className='font-medium ml-1'>{`${speed.toFixed()} km/h`}</span>
                </div>
            </div>
        </div>


        <div className='flex flex-row items-center justify-center text-white text-sm py-3 space-x-2'>
            <UilSun/>
            <p className='font-light'>Rise: <span className='font-medium ml-1'>{formatToLocalTime(sunrise,timezone,"hh:mm a")}</span></p>
            <p className='font-light'>|</p>

            <UilSunset/>
            <p className='font-light'>Sunset: <span className='font-medium ml-1'>{formatToLocalTime(sunset,timezone,"hh:mm a")}</span></p>
            <p className='font-light'>|</p>

            <UilSun/>
            <p className='font-light'>High: <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span></p>
            <p className='font-light'>|</p>

            <UilSun/>
            <p className='font-light'>Low: <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span></p>
        </div>

    </div>
  )
}

export default TempDetail