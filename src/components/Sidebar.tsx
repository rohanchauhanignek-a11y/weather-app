import { useNavigate } from 'react-router-dom'
import Image from '../assets/b0eba49a-e35a-4c82-82f5-59feae77f4af.png'

const element = [{item:"Home",path:"/home"}, {item:"Search History",path:"/history"}, {item:"Settings",path:"/setting"}]

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='h-full'>

      <div className='text-white font-bold flex justify-evenly pt-8 h-[12.5%] '>Weatherly</div>
      <div className='h-1/4'>
        {
          element.map((item,i) => {
            return (
              <div className='flex justify-evenly text-white font-bold text-lg py-4 cursor-pointer hover:bg-[hsl(222,45%,13%)]' key={i} onClick={()=>navigate(item?.path)}>
                {item.item}
              </div>
            )
          })
        }
      </div>
      <div className='  grid grid-cols-1 '>
        <div className='h-[25%] bg-body flex justify-center text-white items-center text-2xl font-bold justify-items-center-safe'>

          <label className="inline-flex items-center cursor-pointer">
            <span className="select-none text-sm font-medium text-heading">Celsius </span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative mx-3 w-9 h-5 bg-body peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="select-none text-sm font-medium text-heading">Fahrenheit</span>
          </label>

        </div>
        <div className='bg-body  flex justify-center items-center text-2xl font-bold '>
          <img src={Image} alt="Weather" />
        </div>
      </div>

    </div>
  )
}

export default Sidebar
