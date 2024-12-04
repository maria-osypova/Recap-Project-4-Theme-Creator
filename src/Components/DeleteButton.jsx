import { useState } from "react";

export default function DeleteButton({ onDelete }) {
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  function showDeletePrompt() {
    setIsConfirmationVisible(true);
  }

  function confirmDeleteColor() {
    onDelete();
    setIsConfirmationVisible(true);
  }

  function cancelDeleteColor() {
    setIsConfirmationVisible(false);
  }
  return (
    <>
      {isConfirmationVisible ? (
        <>
          <p className="color-card-hightlight">Really delete?</p>
          <button onClick={cancelDeleteColor}>CANCEL</button>
          <button onClick={confirmDeleteColor}>DELETE</button>
        </>
      ) : (
        <button onClick={showDeletePrompt}>DELETE</button>
      )}
    </>
  );
}

// + create component which return Delete Button
// + showDeletePrompt function -> return <p classname=".color-card-hightlight">"Really delete?"</p>, CancelButton, DeleteButton
// + useState to handle isConfermed ?
// + cancelDeleteColor function -> return DeleteButton
// + confirmDeleteColor function -> delete color object from array
// + add DeleteButton to Color component
// + if Colors is epmty -> "No colors.. start by adding one!"
