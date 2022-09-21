/*RAFCE*/
import { useState } from "react";

const AcortadorEnlaces = ({setInputValue}) => {
const [value, setValue] = useState("");
const handleClick = () =>
  {
    setInputValue(value);
    setValue("");
  }
  return (
    <div className="inputContainer">
        <h1><span>Acortador </span>De Enlaces</h1>
        <div>
            <input 
              type="text" 
              placeholder="Copia el link para acortarlo"
              value = {value}
              onChange={e => setValue(e.target.value)}
            />
            <button onClick={handleClick}>Acortar</button>
        </div>
    </div>
  )
}

export default AcortadorEnlaces

