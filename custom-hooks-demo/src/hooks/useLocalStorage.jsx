import React, { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initialValue;
  });

  useEffect(() => {
    console.log("effect runs");
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default useLocalStorage;
