import { useState } from "react";

import "./TodoItem.css";

function handleClick(todo) {
  alert(`${todo.data} is clicked`);
}
function TodoItem(props) {
  const [isFinished, setIsFinished] = useState(false);
  const[isEditing,setIsEditing]=useState(false);
  const[todoData,setTodoData]=useState(props.todo.data);
  return (
    <div>
    {(isEditing) ?         <input  type="text" value={todoData} onChange={(e) => setTodoData(e.target.value)}/> :

    <li onClick={() => handleClick(props.todo)}>  <span>
          {props.todo.data}
        </span> </li> 

       
       
     }
      <button
        onClick={() => {
          setIsFinished(!isFinished);
          props.delete();
        }}
      >
        Done
      </button>


      <button onClick={() =>{
        setIsEditing(!isEditing)
        props.edit(todoData)
      }}>

        {(isEditing) ? 'Save' : 'Edit'}
      </button>


    </div>
  );
}

export default TodoItem;
