import { useState } from "react";
import ColorInput from "./ColorInput";
import { nanoid } from "nanoid";

export default function ColorForm({ onSubmitColor }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const dataWithId = { id: nanoid(), ...data };
    console.log(dataWithId);
    onSubmitColor(dataWithId);
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <label htmlFor="role">Role</label>
      <input
        id="role"
        name="role"
        defaultValue="primary main"
        style={{ width: "20vh" }}
      />
      <label htmlFor="hex">Hex</label>
      <div>
        <ColorInput id={"hex"} defaultValue={"#ffffff"} />
      </div>
      <label htmlFor="contrastText">Contrast text</label>
      <div>
        <ColorInput id={"contrastText"} defaultValue={"#000000"} />
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
