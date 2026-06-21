import { useState } from "react"

import Sidebar from "./Sidebar"
import Body from "./Body"
const Dashboard = () => {
  const [flag,setflag] = useState(true)
  return (
    <div className="flex ">
      
      {flag &&<div className="bg-[hsl(222.58deg_58.49%_10.39%)] w-1/4 h-screen">
        <Sidebar/>
        
      </div>}
      <div className="bg-[hsl(222,45%,13%)] flex-1 p-4">
        {/* {o <button onClick={()=>setflag(!flag)}>Toggle</button>} */}
      <Body setflag={setflag}/>
      </div>
      
    </div>
  )
}

export default Dashboard
