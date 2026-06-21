
import Inputs from './Inputs';
import WeatherCard from "./WeatherCard"
import WeatherOverView from './WeatherOverView';
import WeeklyCardOverView from './WeeklyCardOverView';
import CityTable from './CityTable';
const Body = ({ setflag }: { setflag: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className="min-h-screen flex flex-col gap-6">
      
      <Inputs setflag={setflag} />
      <WeatherCard/>
      
      <WeatherOverView/>
      <WeeklyCardOverView/>
      <CityTable/>
    </div>
  );
}

export default Body
