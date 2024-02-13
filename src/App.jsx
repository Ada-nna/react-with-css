import { useState } from "react";
import Button from "./components/button";
import Todo from "./components/todo";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "Going to bed by 4am",
      done: true,
    },
    {
      id: 1,
      text: "Buying food at the market",
      done: false,
    },
  ]);

  console.log(todos);

  return (
    <div className="container">
      <header>
        <h1>Todo</h1>
      </header>
      <form className="flex">
        <input type="text" />
        <Button>Submit</Button>
      </form>
      <div className="todos_container">
        <div className="flex">
          <h3>Todos</h3>
          <p>0</p>
        </div>
        <ul>
          {todos.map((todo, i) => (
            <Todo text={todo.text} done={todo.done} key={todo.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
