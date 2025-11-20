// import React, { useEffect, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

function BasicForm() {
  //   const [firstname, setFirstname] = useState(() => {
  //     return JSON.parse(localStorage.getItem("firstname")) || "";
  //   });

  //   useEffect(() => {
  //     console.log("effect runs");
  //     localStorage.setItem("firstname", JSON.stringify(firstname));
  //   }, [firstname]);

  const [firstname, setFirstname] = useLocalStorage("firstname", "");
  const [lastname, setLastname] = useLocalStorage("lastname", "");
  return (
    <form>
      <h1>Basic Form</h1>
      <label htmlFor="firstname">First Name : </label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />

      <label htmlFor="firstname">First Name : </label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />

      <h2>
        hii , {firstname} {lastname}{" "}
      </h2>
    </form>
  );
}

export default BasicForm;

// explanation
//1. -------- Component first time render hota hai (page refresh hua)

// Browser localStorage check karega

// Agar empty hai → "" (empty string) lega

// Agar stored value hai → wahi value lega

// Aur useState ka initial value wahi ban jaata hai

//2------- .User ne likhna continue kiya → "ga" → "garima"

// Har character par:

// setValue → state update

// UI update

// useEffect → localStorage update

// Final localStorage value: "garima"

//3. -------4. Page Refresh

// Refresh hone par React phirse component mount karta hai, aur phir:

// useState(localStorage.getItem("text") || "");

// Yeh karega:

// localStorage.getItem("text") → "garima"

// useState ka initial value → "garima"

// ✔️ Isliye input me automatically “Garima” aa jata hai.

//  Perfect Summary (Tumhari baat ko ekdum perfect English me):

// ✔ UI always updates from React state, not from localStorage.
// ✔ localStorage is only used to restore the state after refresh.
// ✔ After refresh, useState() reads from localStorage and sets the initial state.
// ✔ And because UI shows the state, tumhe refresh ke baad wahi value dikhti hai jo localStorage me thi.
