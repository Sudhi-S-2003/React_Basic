import { useContext } from "react"
import { Appcontext } from "./ContextProvider"
function Footer() {
  const {name,phone}=useContext(Appcontext)

  return (
    <div className="footer">Footer
    <br />
    <h4>phone no: {phone}   .......  Name: {name}</h4>


    </div>
  )
}

export default Footer