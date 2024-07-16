import { useState } from "react";
import './style.css'

function UseState() {
//     const defaultcolor ="red";
//     // let color = defaultcolor;
//     let [color,SetColor]=useState(defaultcolor)
//    function changecolor(){
//     // color ="blue";
//     // console.log(color)
//     SetColor("blue");
//     }
const [vehicle, setVehicle] = useState({
    name: "",
    model: 0,
    color: "",
    price: 0,
});
const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle(prevVehicle => ({
        ...prevVehicle,
        [name]: value
    }));
};
   // Function to check if the color is dark
   const isDarkColor = (color) => {
    const darkColors = ["black", "navy", "maroon", "darkgreen", "purple"];
    return darkColors.includes(color.toLowerCase());
};
const textColor = isDarkColor(vehicle.color) ? 'white' : 'black';

  return (
    <div className="usestate">
    {/* <h1>My favourate color is {color}!</h1>
    <button onClick={changecolor}>change to Blue</button> */}
      <h1>Change inputs to show values</h1>
            <h3>Vehicle</h3>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={vehicle.name}
                onChange={handleChange}
            />
            <input
                type="number"
                name="model"
                placeholder="Model"
                value={vehicle.model}
                onChange={handleChange}
            />
            <input
                type="text"
                name="color"
                placeholder="Color"
                value={vehicle.color}
                onChange={handleChange}
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                value={vehicle.price}
                onChange={handleChange}
            />
    <div className="card" style={{backgroundColor:vehicle.color,color: textColor }}>
    {vehicle && (
                    <>
                        <p>Name: {vehicle.name}</p>
                        <p>Model: {vehicle.model}</p>
                        <p>Color: {vehicle.color}</p>
                        <p>Price: {vehicle.price}</p>
                        <i>{textColor}</i>
                    </>
                )}

</div>
    </div>
  )
}

export default UseState





/*
The reason we don't need to create a new state for textColor is that textColor is a derived value. It can be computed from the existing state (vehicle.color) every time the component renders, which makes it unnecessary to store it as a separate state variable.

By computing textColor directly in the render, you ensure that it is always in sync with vehicle.color, avoiding potential issues with keeping multiple state variables consistent.
Explanation:

Derived State Calculation: textColor is calculated directly from the vehicle.color state variable in each render. This ensures it always reflects the current state without needing separate state management.
Efficiency: This approach is efficient because it avoids unnecessary state updates and ensures that textColor is always consistent with vehicle.color.
Simplified Logic: By avoiding an additional state variable, the logic of the component is simplified, reducing potential sources of bugs.
*/