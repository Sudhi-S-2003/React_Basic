import { useContext } from "react"
import { Appcontext } from "./ContextProvider"
function Contact() {
  const {phone,name}=useContext(Appcontext)

  return (
    <div className="contact">Contact 
    <br />
    <h4>phone no: {phone}   .......  Name: {name}</h4>
    </div>
  )
}

export default Contact