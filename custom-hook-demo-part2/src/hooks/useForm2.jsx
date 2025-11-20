import React, { useState } from "react";

function useForm2(initalValues) {
  const [values, setValues] = useState(initalValues);

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return { values, handleChange };
}

export default useForm2;
