
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { feranHitCovter } from "../utils/feranhitCovter";
import {  useSelector } from 'react-redux';

const WeatherCard = () => {

  const waetherDataRedux = useSelector((state:any) => state.weather.weatherData);
  const IsCelicuse = useSelector((state:any)=>state.weather.unit)
  console.log(waetherDataRedux);
  
  return (
    <div className="bg-body flex justify-center h-72 w-full relative">
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
                 
                <h2>{waetherDataRedux?.name}</h2>
              </div>
              <div className=''>
                <p className='text-xs text-gray-400'>{"Loaction"}</p>
              </div>
              </div>
              
            </div>
          </div>
          <div className=' h-[75%] flex justify-center items-center'>
            <div className='flex justify-center w-1/4 h-1/2 items-center'>
              <img src={`https://openweathermap.org/img/wn/${waetherDataRedux?.weather[0]?.icon}@2x.png`} className='shadow-black w-full flex items-start'/>
            </div>
          </div>
          </div>

          <div className="w-1/2 h-full flex items-center justify-center ">
          <div className='  flex flex-col gap-2 text-white'>
            <div className='text-6xl font-semibold'>{IsCelicuse?`${waetherDataRedux?.main.temp}°C`:feranHitCovter(waetherDataRedux?.main.temp)}</div>
            <div><p className='text-3xl'>{waetherDataRedux?.weather[0].description}</p></div>
            <div><p>Feels like {IsCelicuse?`${waetherDataRedux?.main.feels_like}°C`:feranHitCovter(waetherDataRedux?.main.feels_like)}</p></div>
          </div>
          
          </div>
        </div>
      </div>
  )
}

export default WeatherCard
