import React from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

function StatusBar() {
  const { isOnline } = useOnlineStatus();

  return (
    <>
      <h1>Status of my website .....</h1>

      <h1>{isOnline ? "ONLINE " : "OFFLINE ..Internet disconnected"}</h1>
    </>
  );
}

export default StatusBar;
