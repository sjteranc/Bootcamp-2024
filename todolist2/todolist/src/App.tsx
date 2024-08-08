import React, { useReducer, useState } from 'react';
import './App.css';
import ToDo from './components/ToDo';

type ToDoType = {
  text: string;
  done: boolean;
};

type ActionType =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; index: number }
  | { type: 'DELETE_TODO'; index: number }
  | { type: 'EDIT_TODO'; index: number; text: string };

const initialToDos: ToDoType[] = [
  { text: 'Learn React', done: false },
  { text: 'Learn TypeScript', done: false },
  { text: 'Learn GraphQL', done: false },
];

function toDoReducer(state: ToDoType[], action: ActionType): ToDoType[] {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, done: false }];
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        index === action.index ? { ...todo, done: !todo.done } : todo
      );
    case 'DELETE_TODO':
      return state.filter((_, index) => index !== action.index);
    case 'EDIT_TODO':
      return state.map((todo, index) =>
        index === action.index ? { ...todo, text: action.text } : todo
      );
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(toDoReducer, initialToDos);
  const [text, setText] = useState('');

  const editText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    if (text.trim() !== '') {
      dispatch({ type: 'ADD_TODO', text });
      setText('');
    }
  };

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="input-container">
        <input onChange={editText} type="text" value={text} />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <ToDo
            key={index}
            title={todo.text}
            isDone={todo.done}
            onToggle={() => dispatch({ type: 'TOGGLE_TODO', index })}
            onEdit={(newText) => dispatch({ type: 'EDIT_TODO', index, text: newText })}
            onDelete={() => dispatch({ type: 'DELETE_TODO', index })}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
