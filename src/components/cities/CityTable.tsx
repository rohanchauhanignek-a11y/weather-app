import CityCard from "./CityCard";
import { useDispatch, useSelector } from "react-redux";
import { clearAll } from "../../redux/weatherSlice";
interface CityTableProps {
  value: number;
}

const CityTable = ({ value }: CityTableProps) => {

  const dispatch = useDispatch();
  console.log("value",value)
  const cities = useSelector((state: any) => state.weather.history);
  const finalCities = value !== 0 ? cities.slice(0, value) : cities;
  return (
    <div className="bg-[hsl(223,36%,35%)] rounded-lg p-4 text-white">
      <div className="flex justify-between mb-3">
        <p>Recent Search</p>

        <button
          className="text-blue-300"
          onClick={() => dispatch(clearAll())}
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 gap-2 overflow-y-scroll scrollbar-none">
        {finalCities.map((item: any, index: number) => (
          <CityCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CityTable;