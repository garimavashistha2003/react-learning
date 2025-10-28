import React, { useState } from 'react'

const initialItems = [
    {title : "biscuits", id : 0},
    {title : "Namkeen", id : 1},
    {title : "Chocolates ", id : 2},
    {title : "Maggie", id : 3},
]

function AvoidDuplicate() {
    //ititial item 
    //jo select krna hai vo item 

    const [items] = useState(initialItems);
    const [selectedItem , setSelectedItem] = useState(items[0]);


    function chooseItem(item){
        setSelectedItem(item);
    }

    

  return (
    <div>
        <h2>What's your travel snack?</h2>
        <ul>
            {items.map((item)=>{
                return(
                <li key={item.id}>
                    {item.title}
                    {' '}
                    <button onClick={() => chooseItem(item)}>Choose</button>
                </li>
                )
            })}
        </ul>
        <p>You picked {selectedItem.title}.</p>
    </div>
  )
}

export default AvoidDuplicate