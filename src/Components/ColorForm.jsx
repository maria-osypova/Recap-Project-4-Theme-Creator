import { useState } from "react";
import ColorInput from "./ColorInput";
import { nanoid } from "nanoid";

export default function ColorForm({
  onSubmitColor,
  defaultValues = {},
  isEditing = false,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const dataWithId = { id: defaultValues.id || nanoid(), ...data };
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
        defaultValue={defaultValues.role || "primary main"}
        style={{ width: "20vh" }}
      />
      <label htmlFor="hex">Hex</label>
      <div>
        <ColorInput id={"hex"} defaultValue={defaultValues.hex || "#ffffff"} />
      </div>
      <label htmlFor="contrastText">Contrast text</label>
      <div>
        <ColorInput
          id={"contrastText"}
          defaultValue={defaultValues.contrastText || "#000000"}
        />
      </div>
      <button className="button" style={{ width: "20vh" }}>
        {isEditing ? "UPDATE COLOR" : "ADD COLOR"}
      </button>
    </form>
  );
}
