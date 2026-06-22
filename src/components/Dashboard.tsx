import { useState } from "react"

import Sidebar from "./Sidebar"
import Body from "./Body"
const Dashboard = () => {
  fetch('https://nominatim.openstreetmap.org/search?q=mum&featuretype=city&format=json&limit=10')
  .then(res => res.json())
  .then(cities => console.log(cities))
  const [flag,setflag] = useState(true)
  return (
    <div className="flex ">
      
      {flag &&<div className="bg-[hsl(222.58deg_58.49%_10.39%)] w-1/4 ">
        <Sidebar/>
        
      </div>}
      <div className="bg-[hsl(222,45%,13%)] flex-1 p-4 overflow-y-scroll scrollbar-none">
        {/* {o <button onClick={()=>setflag(!flag)}>Toggle</button>} */}
      <Body setflag={setflag} flag={flag} />
      </div>
      
    </div>
  )
}

export default Dashboard
