import { useState } from "react";
import DeleteButton from "../DeleteButton";
import "./Color.css";
import ColorForm from "../ColorForm";

export default function Color({ color, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditToggle() {
    setIsEditing((prev) => !prev);
  }

  function handleUpdate(updatedColor) {
    onUpdate({ ...updatedColor, id: color.id });
    setIsEditing(false);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {isEditing ? (
        <>
          <ColorForm
            onSubmitColor={handleUpdate}
            defaultValues={color}
            isEditing={isEditing}
          />
          <button onClick={handleEditToggle}>CANCEL</button>
        </>
      ) : (
        <>
          <h3 className="color-card-headline">{color.hex}</h3>
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>
          <DeleteButton onDelete={onDelete} />
          <button onClick={handleEditToggle}>EDIT</button>
        </>
      )}
    </div>
  );
}
