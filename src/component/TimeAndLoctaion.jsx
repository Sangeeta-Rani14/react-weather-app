import React from 'react'
import { formatToLocalTime } from '../service/weatherservice'

function TimeAndLoctaion({weather:{dt,name,country}}) {
return (
    <div>
        <div className='flex items-center justify-center my-6'>

            <p className='text-white text-xl font-extralight'>
                {formatToLocalTime(dt)}
            </p>
        </div>
        <div className='flex items-center my-3 justify-center'>
            <p className='text-white text-3xl font-medium'>{`${name},${country}`}</p>
        </div>
    </div>
)
}

export default TimeAndLoctaion