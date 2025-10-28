import { useState } from "react";

export default function Panel({title,children,IsActive,onShow}){

    return(
        <section>
            <h3>{title}</h3>
            {IsActive ? (
                <p>{children}</p>
            ):(
                <button onClick={onShow}>Show</button>
            )}
        </section>
        
    )
}