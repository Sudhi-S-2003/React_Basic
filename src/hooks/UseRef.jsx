import { useEffect, useRef, useState } from "react"
import './style.css'

function UseRef() {
    //  const [val,SetVal]=useState(0);
    //  const count=useRef(0)
    // //  const [count,SetCount]=useState(0);
    // //  useEffect(()=>{
    // //     SetCount((prevcount)=>prevcount+1)
    // //  },[val])
    // //useRef value change no re-render
    // useEffect(()=>{
    //     count.current =count.current+1;
    // })

    const inputElem=useRef();
   const btnClicked=()=>{
    console.log(inputElem.current.value);
    inputElem.current.style.background="red";
    }
    
  return (
    <div className="useref">
        
        {/* <div className="box">
        <button className="error" onClick={()=>{SetVal((prevval)=> prevval-1)}}>-1</button>
        <h1>{val}</h1>
        <button className="success" onClick={()=>{SetVal((prevval)=> prevval+1)}}>+1</button>
        <h1>Render Count:{count.current}</h1>
        </div> */}
        <input type="text" ref={inputElem} />
        <button onClick={btnClicked}>Click here</button>
    </div>
  )
}

export default UseRef