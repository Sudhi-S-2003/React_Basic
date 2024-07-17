import { useReducer, useState } from "react";

function UseReducer() {
    // const [cou,Setcou]=useState(0)
    const initialstate={count : 0}
    const reducer=(currentstate,action)=>{
        switch (action.type) {
            case 'inc':
                return {count : currentstate.count + 1} 
            case 'dec':
                    return {count : currentstate.count - 1}          
            default:
                return currentstate
        }
       
    }
   const [state,dispatch]=useReducer(reducer,initialstate)

  return (
    <div>
        
        {/* <button onClick={()=>{Setcou((pre)=>pre-1)}}>dec</button>
        <h1>{cou}</h1>
        <button onClick={()=>{Setcou((pre)=>pre+1)}}>inc</button> */}
         <button onClick={()=>dispatch({type:"dec"})}>dec</button>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"inc"})}>inc</button>
    </div>
  )
}

export default UseReducer