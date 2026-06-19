import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
const WeatherCard = () => {
  return (
    <div className="bg-body flex justify-center h-[37.5%] w-full relative">
        <img
          src="https://i.pinimg.com/1200x/2c/58/69/2c58698a46b218700ddcc27f09357447.jpg"
          className="h-full w-full object-cover rounded-xl"
        />

        <div className="absolute inset-0 flex object-cover bg-blue-500 rounded-xl">
          <div className="w-1/2 h-full ">
          <div className=' h-1/4 flex justify-center items-center'>
            <div className=' '>
            <FontAwesomeIcon icon={faLocationDot} className='text-white' />
            </div>
            <div className='  flex '>
              <div>
                <div className=' font-bold text-white flex'>
                 
                <h2>{"Ahmedabad"}</h2>
              </div>
              <div className=''>
                <p className='text-xs text-gray-400'>{"Loaction"}</p>
              </div>
              </div>
              
            </div>
          </div>
          <div className=' h-[75%] flex justify-center items-center'>
            <div className='flex justify-center w-1/4 h-1/2 items-center'>
              <img src='https://freepngimg.com/thumb/weather/76818-forecasting-material-rain-shower-weather-icon.png' className='shadow-black'/>
            </div>
          </div>
          </div>

          <div className="w-1/2 h-full flex items-center justify-center ">
          <div className='  flex flex-col gap-2 text-white'>
            <div className='text-6xl font-semibold'>{"32°C"}</div>
            <div><p className='text-3xl'>Preaty Cloudy</p></div>
            <div><p>{"Feels like 32°C"}</p></div>
          </div>
          
          </div>
        </div>
      </div>
  )
}

export default WeatherCard
