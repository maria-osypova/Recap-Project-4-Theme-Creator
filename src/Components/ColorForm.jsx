import { useState } from "react";

export default function ColorForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("I add new color");
    const newInputValue = event.target.value;
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <label htmlFor="colorRole">Role</label>
      <input
        id="colorRole"
        name="colorRole"
        placeholder="primary main"
        style={{ width: "20vh" }}
      />
      <label htmlFor="colorHex">Hex</label>
      <div>
        <ColorInput id={"colorHex"} value={newInputValue} />
      </div>
      <label htmlFor="colorContrastText">Contrast text</label>
      <div>
        <input
          id="colorContrastText"
          name="colorContrastText"
          placeholder="#ffffff"
          style={{ width: "20vh" }}
        />
        <input type="color" id="colorPicker" name="colorPicker" />
      </div>
      <button className="button" style={{ width: "20vh" }}>
        ADD COLOR
      </button>
    </form>
  );
}

// + create a form with 3 text input +3 title+2 color selector, 1 button
// + The inputs for hex and contrastText should include both color and text input types for easy and accurate color selection.
// + The form should be prefilled with default values to guide user input.
// Color from colorPicker = textInput - useState for Hex and Contrast Text
// add ColorInput check text === colorPicker before submit form
// data from form save into props and add id generation
// formprops go to app and add to array initialColors at first position
// check new theme color appered
