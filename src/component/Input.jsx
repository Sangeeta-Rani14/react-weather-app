import React from 'react'
import { UilSearch ,UilLocationPinAlt} from '@iconscout/react-unicons'


function Input() {
return (
    
    
    <div className="flex flex-row justify-center my-6">

        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">

            <input type="text" 
            placeholder='search for city....'
            className="text-xl font-light p-2 shadow-xl focus:outline-none capitalize placeholder:lowercase" />
            <UilSearch size={25} 
            className="text-white cursor-pointer transition ease-out hover:scale-150 "  />
            <UilLocationPinAlt size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-150 " />
        
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button
            name='matrix' 
            className='text-xl text-white font-light hover:scale-125 transition:ease-out '>°C</button>
            <p className='text-xxl text-white mx-1'>|</p>
            <button 
            name='imperial' 
            className='text-xl text-white font-light hover:scale-125 transition:ease-out'>°F</button>
    

        </div>

    </div>




)
}

export default Input