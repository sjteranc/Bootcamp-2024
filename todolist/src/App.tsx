import { useState } from "react";

import './App.css';

type ToDoType = {
  text: string;
  id: number;
  completed: boolean;
};

function App() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState<string>('');
  const [toDos, setTodos] = useState<ToDoType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const addToDo = () => {
    setTodos([...toDos, {
      text: inputText,
      completed: false,
      id: toDos.length + 1,
    }]);
    setInputText(''); 
  };
  const completTask = (id: number) => {
    setTodos(
      toDos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item
  })
    )
  };

  return (
    <>
      <button onClick={addToDo}>
        Add Task (count: {count})
      </button>
      <input type="text" value={inputText} onChange={handleChange} />
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input type="checkbox" checked={todo.completed} onChange={() => completTask(todo.id)} />
            <p>{todo.text}</p>
          </li>
        ))}
      </ul>
      <br />
    </>
  );
}


export default App;
