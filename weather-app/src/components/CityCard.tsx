import React from 'react'

const CityCard = ({item}:any) => {
  return (
    <div className=' border rounded-md flex justify-between items-center hover:scale-100 hover:bg-white/5 hover:shadow-lg cursor-pointer'>
      <div className='flex items-center'>
        <div>
            <img src={item.iconUrl}/>
        </div>
        <div>
            <div><p>{`${item.city},${item.country}`}</p></div>
            <div><p>{item.weather}</p></div>
        </div>
      </div>
      <div className='flex justify-center '>
        <div className='p-2'><p>{item.temperature}</p></div>
        <div className='p-2'><p>🤍</p></div>
      </div>
    </div>
  )
}

export default CityCard
