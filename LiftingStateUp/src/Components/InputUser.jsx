import { useState } from "react"

export default function InputUser({label, value,onChange}){


    return(
        <label >
             {label} { ' '}
             <input value={value} onChange={onChange} />
        </label>

    )
}