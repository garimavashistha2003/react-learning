import React, { useState, useReducer } from 'react'
import Task from './Task'

const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false }
  ];

function Tasks() {
    const[tasks, dispatch] = useReducer(taskReducer , initialTasks);
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    //reducer
    function taskReducer(tasks, action){
        if(action.type === 'ADD_TASK'){
            return [...tasks, {id: Date.now(),
                text: action.text ,
                done : false 
            }]
        }
        if(action.type === 'DELETE'){
            return tasks.filter((t)=> t.id !== action.id)
        }

        if(action.type === 'EDIT' ){
            return tasks.map((t)=> {
                if(t.id === action.task.id ){
                    return action.task;
                }else{
                    return t;
                }
            })
        }
        return tasks;
    }


    //dispatch 

    //add task
    function handleAddTask(text){
        if(text.trim() === "") return;
        dispatch({ type: "ADD_TASK", text });
        
    }
    //delete task 
    function handleDelete(taskId){
        dispatch({
            type : 'DELETE', id : taskId
        })
    }

    //edit save task
    function handleSaveTask(task) {
        dispatch({
          type: 'EDIT',
          task: {...task, text : editText}
        });
        setEditText(' ');
        setEditingId(null);

    }
    //cancel

    function cancelTask(){
        setEditingId(null);
        setEditText('');

    }
 
  return (
    <>
        <Task onAddTask={handleAddTask}/>
        {/* <ul>
            {tasks.map((task)=> ( 
                <li key={task.id}>
                    <input type="text" value={task.text} onChange={(e)=> handleEditTask({...task, text:e.target.value})}/>  {' '}
                    <button onClick={()=>handleDelete(task.id)}>Delete</button>{ ' '}
                    <button onClick={()=> handleEditTask(task)}>Edit</button>
                </li>                
            ))}
        </ul> */}

        <ul>
            {tasks.map((task)=>{
                return (
                <li key = {task.id}>
                    {editingId === task.id ? (
                        <>
                            <input type="text" value={editText} onChange={(e)=> setEditText(e.target.value)} />
                            <button onClick={(()=> handleSaveTask(task))}>Save</button>
                            <button onClick={cancelTask}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <input type="text" value={task.text} /> { }
                            <button onClick={()=>handleDelete(task.id)}> Delete</button> { ' '}
                            <button onClick={(() =>{setEditingId(task.id); setEditText(task.text) })}> Edit </button> 

                        </>

                    )
                }
                </li>
            
                )
            })}
        </ul> 





    </>

  )
}

export default Tasks