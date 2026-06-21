

const Weeklycard = ({item}:any) => {
    console.log(item);
  return (
    <div className='w-1/6 text-white hover:scale-105 hover:bg-white/20 hover:shadow-lg cursor-pointer flex justify-center rounded-xl'>
       <div className='w-1/2'>
        <div>
            <p>
                {item.time}
            </p>
        </div>
        <div className=' w-1/2'>
            <img src={item.iconUrl}/>
        </div>
        <div>
            <p>
                {
                    item.temperature
                }
            </p>
        </div>
       </div>
    </div>
  )
}

export default Weeklycard
