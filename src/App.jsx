import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm";
import { useState } from "react";

function App() {
  const [hexValue, setHexValue] = useState("#000000");
  const [colorContrastText, setColorContrastText] = useState("#ffffff");
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm></ColorForm>

      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
