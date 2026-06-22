import CityCard from "./CityCard";
import { useDispatch, useSelector,  } from "react-redux";

import { clearAll } from "../../redux/weatherSlice";

const CityTable = () => {
  const dispatch =useDispatch();
  const cities = useSelector((state:any)=>state.weather.history)
  console.log("cities is ",cities)
  return (
    <div className="bg-[hsl(223,36%,35%)] rounded-lg p-4 text-white">
      <div className="flex justify-between">
        <div>
          <p>Recent Search</p>
        </div>
        <div className="text-red-700">
         <button className="text-blue-300" onClick={()=>dispatch(clearAll())}>ClearAll</button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1  gap-2 overflow-y-scroll scrollbar-none">
          {cities.map((item:any) => {
            return <CityCard item={item}  />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CityTable;
