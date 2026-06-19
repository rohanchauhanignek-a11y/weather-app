import React from 'react'
const element = ["Home","Search History","Settings"]
const Sidebar = () => {
  return (
    <div className='h-full'>
      
      <div className='text-white font-bold flex justify-evenly pt-8 h-[12.5%] '>Weatherly</div>
      <div className='h-1/4'>
        {
            element.map((item)=>{
                return (
                    <div className='flex justify-evenly text-white font-bold pt-4'>
                        {item}
                    </div>
                )
            })
        }
      </div>
      <div className=' h-[62.5%]'>
        <div className='h-[25%] bg-amber-400 flex justify-center'>
          <button>
            toggleButton
          </button>
        </div>
        <div className='bg-amber-100 h-[75%]'>
          h
        </div>
      </div>
     
    </div>
  )
}

export default Sidebar
