import "./style.css"
import Profile from "./UseContext/Profile"
import Footer from "./UseContext/Footer"
import ContextProvider from "./UseContext/ContextProvider"
function UseContext() {
  return (
    <div className="usecontext">
        <ContextProvider>
        App
        <Profile/>
        <Footer/>
        </ContextProvider>
    </div>
  )
}

export default UseContext