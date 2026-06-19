
import Inputs from './Inputs';
import WeatherCard from "./WeatherCard"
import WeatherOverView from './WeatherOverView';
import WeeklyCardOverView from './WeeklyCardOverView';
import CityTable from './CityTable';
const Body = () => {
  return (
    <div className="h-screen flex flex-col gap-6">
      <Inputs />
      <WeatherCard/>
      
      <WeatherOverView/>
      <WeeklyCardOverView/>
      <CityTable/>
    </div>
  );
}

export default Body
