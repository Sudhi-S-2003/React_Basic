import { useMemo, useState } from "react"

function UseMemo() {
    const [num,Setnum]=useState(0)
    const [cou,Setcou]=useState(0)
    function cube(num){
        console.log("cube")
        return Math.pow(num,3)
    }
    // const result =cube(num);
    const result =useMemo(()=>{
        return cube(num)
    },[num])
  return (
    <div className="usememo">
        <input type="number" value={num} onChange={(e)=>Setnum(e.target.value)}/>
        <h1>cube of number {result}</h1>
        <button onClick={()=>Setcou((prevcou)=>prevcou+1)}>count++</button>
        <h1>Counter:{cou}</h1>
    </div>
  )
}

export default UseMemo