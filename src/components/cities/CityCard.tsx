

const CityCard = ({item}:any) => {
  return (
    <div className='max-h-20 border rounded-md flex justify-between  hover:scale-100 hover:bg-white/5 hover:shadow-lg cursor-pointer' key={item?.id}>
      <div className='flex items-center '>
        <div>
            <img src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}/>
        </div>
        <div>
            <div><p>{`${item?.name},${item?.sys?.country}`}</p></div>
            <div className="text-xs"><p>{item?.weather[0]?.description}</p></div>
        </div>
      </div>
      <div className='flex justify-center '>
        <div className='p-2'><p>{`${item?.main?.temp}°C`}</p></div>
        <div className='p-2'><p>🤍</p></div>
      </div>
    </div>
  )
}

export default CityCard
