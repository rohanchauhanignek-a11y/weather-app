import Weeklycard from "./Weeklycard";
const hourlyForecast = [
  {
    time: "10 AM",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/869/869869.png", // Sun
    temperature: "30°C",
  },
  {
    time: "11 AM",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/414/414825.png", // Cloud
    temperature: "31°C",
  },
  {
    time: "12 PM",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png", // Partly Cloudy
    temperature: "32°C",
    active: true,
  },
  {
    time: "01 PM",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png", // Rain
    temperature: "29°C",
  },
  {
    time: "02 PM",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/414/414825.png", // Cloud
    temperature: "28°C",
  },
  {
    time: "03 PM",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/869/869869.png", // Sun
    temperature: "27°C",
  },
];
const WeeklyCardOverView = () => {
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
            hourlyForecast.map((item)=>{
                return(<Weeklycard item={item}/>)
            })
        }
      </div>
    </div>
  )
}

export default WeeklyCardOverView
