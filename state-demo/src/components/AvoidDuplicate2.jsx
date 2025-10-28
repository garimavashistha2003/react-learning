import React, { useState } from 'react'

const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
  ];

function AvoidDuplicate2() {

    const [items, setItems] = useState(initialItems);
    const[selectedId , setSelectedId] = useState(0);

    const selectedItem = items.find(item =>
        item.id === selectedId
      );

    function handleChangeItems(id, e){

        setItems(items.map((item) => {
            if(item.id === id){
                return {
                    ...item,
                    title : e.target.value
                }
            }else{
                return item;
            }
        }))

    }

  return (
    <div>
        <h2>Whats your Travel Snack?</h2>
        <ul>

            {items.map((item)=>(
                <li key={item.id}>
                    <input value={item.title}
                    onChange={(e)=> {handleChangeItems(item.id, e)}}/>
                    {' '} 
                    <button onClick={()=>{setSelectedId(item.id)}}>Choose</button>
                </li>
            ))}

        </ul>
        <h3> You Picked : {selectedItem.title}</h3>
    </div>
  )
}

export default AvoidDuplicate2