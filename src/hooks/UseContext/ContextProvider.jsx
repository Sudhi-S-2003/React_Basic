import { createContext } from "react"
export const Appcontext=createContext();
const ContextProvider=(props)=>{
    const phone="+91 989999";
    const name ="sudhi";
    return(
        <Appcontext.Provider value={{phone,name}}>
            {props.children}
        </Appcontext.Provider>
    )
}
export default ContextProvider