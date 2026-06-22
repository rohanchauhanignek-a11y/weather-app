import CityCard from "./CityCard";
const citiesWeather = [
  {
    city: "Mumbai",
    country: "India",
    weather: "Sunny",
    temperature: "30°C",
    iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    isFavorite: false,
  },
  {
    city: "Mumbai",
    country: "India",
    weather: "Sunny",
    temperature: "30°C",
    iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    isFavorite: false,
  },
]

const CityTable = () => {
  return (
    <div className="bg-[hsl(223,36%,35%)] rounded-lg p-4 text-white">
      <div className="flex justify-between">
        <div>
          <p>Recent Search</p>
        </div>
        <div className="text-red-700">
          <p>ClearAll</p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1  gap-2 overflow-y-scroll scrollbar-none">
          {citiesWeather.map((item) => {
            return <CityCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CityTable;
