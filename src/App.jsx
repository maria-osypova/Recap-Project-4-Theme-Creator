import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);
  console.log(colors);

  function deleteColor(id) {
    setColors((prevColors) => prevColors.filter((color) => color.id !== id));
  }

  function addColor(newColor) {
    setColors((prevColors) => [newColor, ...prevColors]);
  }
  function updateColor(updatedColor) {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={addColor} />
      {colors.length === 0 ? (
        <p>No colors.. start by adding one!</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDelete={() => deleteColor(color.id)}
            onUpdate={updateColor}
          />
        ))
      )}
    </>
  );
}

export default App;
