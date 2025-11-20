import React, { useState } from "react";

function useForm({ initialValues }) {
  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    setValues(e.target.value);
  }

  const inputProps = {
    value: values,
    onChange: handleChange,
  };
  return inputProps;
}

export default useForm;
