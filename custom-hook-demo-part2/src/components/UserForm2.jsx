import React from "react";
import useForm2 from "../hooks/useForm2";

function UserForm2() {
  const { values, handleChange } = useForm2({
    firstName: "garima",
    lastName: "vashistha",
  });
  return (
    <div>
      <label>First Name : </label>
      <input
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      
      <br />

      <label>Last Name : </label>
      <input name="lastName" value={values.lastName} onChange={handleChange} />

      <p>
        <b>
          Hi {values.firstName} {values.lastName}
        </b>
      </p>
    </div>
  );
}

export default UserForm2;
