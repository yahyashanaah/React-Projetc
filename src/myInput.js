import { useState } from "react";

export default function MyInput() {
    const [myInputValue, setMyInputValue] = useState("");

    function handelInputChange(event) {
        setMyInputValue(event.target.value);
    }
  return (
    <div>
        <label>your Name:</label>
        <input
        value={myInputValue}
        onChange={handelInputChange}/>
    </div>
  )
}
