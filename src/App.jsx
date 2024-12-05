import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm";
import useLocalStorageState from "use-local-storage-state";
import fetchContrastAPI from "./Components/fetchContrastAPI";
import { useEffect } from "react";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  useEffect(() => {
    async function checkInitialColors() {
      const initialColorsWithContrast = await Promise.all(
        initialColors.map(async (color) => {
          const contrastCheck = await fetchContrastAPI(
            color.hex,
            color.contrastText
          );
          return { ...color, contrastCheck };
        })
      );
      setColors(initialColorsWithContrast);
    }
    checkInitialColors();
  }, []);

  function deleteColor(id) {
    setColors((prevColors) => prevColors.filter((color) => color.id !== id));
  }

  async function addColor(newColor) {
    const apiResponse = await fetchContrastAPI(
      newColor.hex,
      newColor.contrastText
    );
    const newColorWithContrast = { ...newColor, contrastCheck: apiResponse };
    setColors((prevColors) => [newColorWithContrast, ...prevColors]);
  }

  async function updateColor(updatedColor) {
    const apiResponse = await fetchContrastAPI(
      updatedColor.hex,
      updatedColor.contrastText
    );
    const newColorWithContrast = {
      ...updatedColor,
      contrastCheck: apiResponse,
    };
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === updatedColor.id ? newColorWithContrast : color
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
