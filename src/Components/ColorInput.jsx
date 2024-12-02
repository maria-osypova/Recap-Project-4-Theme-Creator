import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }
  return (
    <>
      <input
        id={id}
        name={id}
        placeholder="#000000"
        type="text"
        value={inputValue}
        style={{ width: "20vh" }}
        onChange={handleInputValue}
      />
      <input
        type="color"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleInputValue}
      />
    </>
  );
}
// Develop a ColorInput component to handle synchronized text and color inputs,
// ensuring that they reflect the same value. ( Controlled Inputs )
// <ColorInput id={"colorHex"} value={event.target}/>
