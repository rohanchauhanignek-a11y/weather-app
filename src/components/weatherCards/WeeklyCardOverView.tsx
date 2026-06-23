import Weeklycard from "../weatherCards/Weeklycard";
import { getHourlyForecast } from "../../servicices/HourlyData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WeeklyCardOverView = () => {
const [hourlyForecast, setHourlyForeCast] = useState([]);
  const [showAll, setShowAll] = useState(false);
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

const displayedForecast = showAll
    ? hourlyForecast
    : hourlyForecast.slice(0, 8);

  return (
    <div className='rounded-lg bg-[hsl(223,36%,35%)] p-2'>
      <div className="flex justify-between items-center p-1 text-white">
        <h1>Hourly Forecast</h1>

        <button
          className="text-xs cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
      <div className='bg-body -300 flex flex-wrap pt-4 pb-4 justify-center  gap-t-2'>
        {displayedForecast.map((item: any, index) => (
          <Weeklycard key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default WeeklyCardOverView
