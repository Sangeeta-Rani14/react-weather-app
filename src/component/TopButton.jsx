import React from 'react'

function TopButton({setCity}) {
const cities=[{
    id:1,
    title:'London '
},
{
    id:2,
    title:"New Delhi"
},  
{
    id:3,
    title:'Sydney '
},    
{
    id:4,
    title:'Tokyo '
},
{
    id:5,
    title:'South Korea '
}]

return (
    <div className="flex item-center justify-around my-6">

        {cities.map((city)=>(
            <button key={city.id} className="text-white text-lg font-medium "
                onClick={() => setCity({ q: city.title })}
            >{city.title}</button> 
        ))}

    </div>
)
}

export default TopButton