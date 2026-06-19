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
    city: "Delhi",
    country: "India",
    weather: "Partly Cloudy",
    temperature: "28°C",
    iconUrl: "https://openweathermap.org/img/wn/02d@2x.png",
    isFavorite: false,
  },
  {
    city: "Bangalore",
    country: "India",
    weather: "Cloudy",
    temperature: "26°C",
    iconUrl: "https://openweathermap.org/img/wn/03d@2x.png",
    isFavorite: false,
  },
  {
    city: "Ahmedabad",
    country: "India",
    weather: "Sunny",
    temperature: "32°C",
    iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    isFavorite: false,
  },
  {
    city: "Chennai",
    country: "India",
    weather: "Hot",
    temperature: "34°C",
    iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    isFavorite: false,
  },
  {
    city: "Kolkata",
    country: "India",
    weather: "Rainy",
    temperature: "27°C",
    iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    isFavorite: false,
  },
  {
    city: "Hyderabad",
    country: "India",
    weather: "Clear",
    temperature: "29°C",
    iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    isFavorite: false,
  },
  {
    city: "Pune",
    country: "India",
    weather: "Cloudy",
    temperature: "25°C",
    iconUrl: "https://openweathermap.org/img/wn/03d@2x.png",
    isFavorite: false,
  },
  {
    city: "Jaipur",
    country: "India",
    weather: "Sunny",
    temperature: "35°C",
    iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    isFavorite: false,
  },
  {
    city: "Surat",
    country: "India",
    weather: "Clear",
    temperature: "31°C",
    iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    isFavorite: false,
  },
  {
    city: "Lucknow",
    country: "India",
    weather: "Partly Cloudy",
    temperature: "28°C",
    iconUrl: "https://openweathermap.org/img/wn/02d@2x.png",
    isFavorite: false,
  },
  {
    city: "Kanpur",
    country: "India",
    weather: "Cloudy",
    temperature: "27°C",
    iconUrl: "https://openweathermap.org/img/wn/03d@2x.png",
    isFavorite: false,
  },
  {
    city: "Nagpur",
    country: "India",
    weather: "Sunny",
    temperature: "33°C",
    iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    isFavorite: false,
  },
  {
    city: "Indore",
    country: "India",
    weather: "Clear",
    temperature: "29°C",
    iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    isFavorite: false,
  },
  {
    city: "Bhopal",
    country: "India",
    weather: "Rainy",
    temperature: "24°C",
    iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    isFavorite: false,
  },
  {
    city: "Patna",
    country: "India",
    weather: "Cloudy",
    temperature: "26°C",
    iconUrl: "https://openweathermap.org/img/wn/03d@2x.png",
    isFavorite: false,
  },
  {
    city: "Vadodara",
    country: "India",
    weather: "Sunny",
    temperature: "32°C",
    iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    isFavorite: false,
  },
  {
    city: "Rajkot",
    country: "India",
    weather: "Clear",
    temperature: "30°C",
    iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    isFavorite: false,
  },
  {
    city: "Bhavnagar",
    country: "India",
    weather: "Partly Cloudy",
    temperature: "29°C",
    iconUrl: "https://openweathermap.org/img/wn/02d@2x.png",
    isFavorite: false,
  },
  {
    city: "Patan",
    country: "India",
    weather: "Sunny",
    temperature: "31°C",
    iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    isFavorite: false,
  },
];

const CityTable = () => {
  return (
    <div className="bg-[hsl(223,36%,35%)] rounded-lg p-4 text-white">
      <div className="flex justify-between">
        <div>
            <p>
                Recent Search
            </p>
        </div>
        <div className="text-red-700">
            <p>
               ClearAll
            </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-2 h-80 overflow-y-scroll scrollbar-none">
            {
                citiesWeather.map((item)=>{
                    return(<CityCard item={item}/>)
                })
            }
        </div>
      </div>
    </div>
  )
}

export default CityTable
