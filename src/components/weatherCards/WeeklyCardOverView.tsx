import Weeklycard from "../weatherCards/Weeklycard";
import { getHourlyForecast } from "../../servicices/HourlyData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WeeklyCardOverView = () => {
const [hourlyForecast,setHourlyForeCast] = useState([])
const city = useSelector((state:any)=>state.weather.city)
useEffect(() => {
  const fetchHourlyForecast = async () => {
    try {
      const data = await getHourlyForecast(city);
      setHourlyForeCast(data?.list);
      
    } catch (error) {
      console.error('Error fetching hourly forecast:', error);
    }
  };

  fetchHourlyForecast();
}, []);

  return (
    <div className='rounded-lg bg-[hsl(223,36%,35%)] p-4'>
      <div className=' flex justify-between items-center p-1 text-white '>
        <div>
            <h1>Hourly ForCast</h1>
        </div>
        <div className='text-xs'>
            View All
        </div>
      </div>
      <div className='bg-body -300 flex pt-4 pb-4 justify-center'>
        {
            hourlyForecast.slice(0,7).map((item)=>{
                return(<Weeklycard item={item}/>)
            })
        }
      </div>
    </div>
  )
}

export default WeeklyCardOverView
