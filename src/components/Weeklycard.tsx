const Weeklycard = ({ item }: any) => {
  const hourlyIcon = item.weather[0].icon;

  return (
    <div className="w-1/6 text-white hover:scale-105 hover:bg-white/20 hover:shadow-lg cursor-pointer rounded-xl">
      <div className="flex flex-col items-center justify-center">
        <p>{item.dt_txt.split(" ")[1].slice(0, 5)}</p>

        <img
          src={`https://openweathermap.org/img/wn/${hourlyIcon}@2x.png`}
          alt="weather icon"
          className="w-16 h-16"
        />

        <p>{Math.round(item?.main?.temp)}°C</p>
      </div>
    </div>
  );
};

export default Weeklycard;