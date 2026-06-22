import OverviewCard from "../OverviewCard";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { FaTemperatureHalf } from "react-icons/fa6";
import { useSelector,  } from "react-redux";

const WeatherOverView = () => {
  const data =useSelector((state:any)=>state.weather);
  const speed = data?.weatherData?.wind?.speed
  const Temp = data?.weatherData?.main?.feels_like
  
  const weatherHighlights = [
    {
      icon: <WiHumidity className="text-blue-400 text-6xl" />,  
      title: "Humidity",
      count: `${data?.weatherData?.main?.humidity}%`,
    },
    {
      icon: <WiStrongWind className="text-green-400 text-6xl" />, 
      title: "Wind Speed",
      count: `${speed} km/h`,
    },
    {
      icon: <FaTemperatureHalf className="text-orange-400 text-6xl" />, 
      title: "Feels Like",
      count: `${Temp}°C`,
    },
  ];

  return (
    <div className="bg-body flex justify-around ">
      {weatherHighlights.map((item) => (
        <OverviewCard item={item} key={item.title} />  // ✅ added key
      ))}
    </div>
  )
}

export default WeatherOverView