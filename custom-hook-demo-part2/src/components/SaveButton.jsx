import React from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

function SaveButton() {
  const { isOnline } = useOnlineStatus();

  const handleSaveClick = () => {
    console.log("progress saved");
  };

  return (
    <div>
      <button onClick={handleSaveClick} disabled={!isOnline}>
        {" "}
        {isOnline ? "Save progress" : "Reconnecting..."}
      </button>
    </div>
  );
}

export default SaveButton;
