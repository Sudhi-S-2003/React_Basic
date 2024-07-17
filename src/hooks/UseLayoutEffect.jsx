import { useLayoutEffect } from "react"
import { useEffect } from "react"

function UseLayoutEffect() {
    useEffect(()=>{
        console.log("message from useeffect")
    })
    useLayoutEffect(()=>{
        console.log("message from uselayouteffect")
    })
  return (
    <div>UseLayoutEffect {Array(4000).fill('').map((itm,ind)=>{
       return (<li key={ind}>{Math.pow(Math.random(),10)}</li> )
    })}</div>
   
  )
}

export default UseLayoutEffect