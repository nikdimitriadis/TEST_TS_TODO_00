import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { Todo } from './Models/interfaces'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (t: string) => {
    const createdTodo: Todo = {
      text: t,
      id: Math.random().toString(),
    }
    setTodos((oldTodos) => [createdTodo, ...oldTodos])
  }

  const deleteTodo = (id: string) => {
    setTodos((oldTodos) => { return oldTodos.filter(todo => todo.id !== id) })
  }

  return (
    <div className="App">
      <h1>Bug </h1>
      <Form onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
