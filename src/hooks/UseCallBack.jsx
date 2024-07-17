import { useCallback, useState } from "react"
import Header from "./UseCallback/Header"
function UseCallBack() {
    const[count,SetCount]=useState(0);
    const newfn=useCallback(()=>{

    },[])
  return (
    <div>
        <Header newfn={newfn}/>
        <h1>{count}</h1>
        <button onClick={()=>SetCount((prevcount)=>prevcount+1)}>inc</button>

    </div>
  )
}

export default UseCallBack