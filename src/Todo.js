import { useState } from "react";
import TodoItem from "./TodoItem";

function Todo(props) {
  // const todoItem = props.todoList.map((todo) =>
  //    <TodoItem todo={todo} key={todo.id}/>
  // );

  const [todoItems, setTodoItems] = useState([
    { data: "todo1", id: 123 },
    { data: "todo2", id: 456 },
    { data: "todo3", id: 789 },
  ]);
  const [inputText, setInputText] = useState("");

  function deleteTodo(todoId) {
    console.log(todoId);

    let remainingTodos = todoItems.filter((todo) => todo.id !== todoId);
    setTodoItems(remainingTodos);
  }

  function editTodo(todoId,newTodo){
    let updateTodos= todoItems.map((todo) => {
      if(todo.id===todoId) todo.data=newTodo;
      return todo;
    });


    setTodoItems(updateTodos);
  }
  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          setTodoItems([
            ...todoItems,
            { data: inputText, id: new Date().getTime() },
          ]);
          setInputText("");
        }}
      >
        ADD
      </button>
      <ul>
        {todoItems.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              delete={() => deleteTodo(todo.id)}
              edit = {(newTodo) => editTodo(todo.id,newTodo)}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
