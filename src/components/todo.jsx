import React from "react";
import Button from "./button";

function Todo(props) {
  console.log(props.text);
  return (
    <li className={`todo flex ${props.done ? "done" : ""}`}>
      {props.done ? <s>{props.text}</s> : <p>{props.text}</p>}
      <div>
        <Button style={{ backgroundColor: "blue", color: "white" }}>
          Done
        </Button>
        <Button
          style={{ backgroundColor: "red", color: "white", opacity: 0.8 }}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}

export default Todo;
