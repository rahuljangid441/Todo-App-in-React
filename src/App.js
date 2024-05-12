
import './App.css';
import Todo from './Todo';
function App() {
  const todos=[{data:'todo1',id:123},{data:"todo2",id:321},{data:'todo3',id:435}];
  return (
    <div className="App">
    <Todo todoList={todos} />
    </div>
  );
}

export default App;
