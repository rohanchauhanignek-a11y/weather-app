import OverviewCard from "./OverviewCard";
const WeatherOverView = () => {
  const weatherHighlights = [
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/512/728/728093.png",
    title: "Humidity",
    count: "60%",
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/512/979/979585.png",
    title: "Wind Speed",
    count: "12 km/h",
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1684/1684375.png",
    title: "Feels Like",
    count: "36°C",
  },
];
  return (
    <div className="bg-body flex justify-around ">
      {
      weatherHighlights.map((item)=>{
        return(<OverviewCard item={item}/>)
      })
      }
    </div>
  )
}

export default WeatherOverView
