
import Inputs from '../Inputs';
import WeatherCard from "../weatherCards/WeatherCard"
import WeatherOverView from '../weatherCards/WeatherOverView';
import WeeklyCardOverView from '../weatherCards/WeeklyCardOverView';
import CityTable from '../cities/CityTable';
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6">
      
      <Inputs  />
      <WeatherCard/> 
      <WeatherOverView/>
      <WeeklyCardOverView/>
      <CityTable value={5}/>
    </div>
  );
}

export default Home
