import { useState } from "react"
import { useEffect } from "react"

function UseEffect() {
    const [count,Setcount]=useState(0);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         Setcount((prevcount)=>{
    //             return prevcount+1
    //         })
    //     },2000)
    // })
      useEffect(()=>{
        setTimeout(()=>{
            Setcount((prevcount)=>{
                return prevcount+1
            })
        },2000)
    },[])
  return (
    <div className="useeffect">
        i have render {count} time
    </div>
  )
}

export default UseEffect