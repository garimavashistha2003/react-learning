import React from "react";
import useForm from "../hooks/useForm";

function UserForm() {
  const firstName = useForm("garima");
  const lastName = useForm("Vashistha");

  return (
    <div>
      <h1>Form </h1>
      <label>First name : </label>
      <input {...firstName} /> <br />
      <label>Last name : </label>
      <input {...lastName} />
      <p>
        <b>
          Good morning, {firstName.value} {lastName.value}.
        </b>
      </p>
    </div>
  );
}

export default UserForm;
