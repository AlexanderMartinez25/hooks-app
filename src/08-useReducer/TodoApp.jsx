import { useReducer } from "react";
import { todoReducer } from "./TodoReducer";

const initailState = [
  {
    id: new Date().getTime(),
    desciption: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 2,
    desciption: "Recolectar la piedra del alma",
    done: false,
  },
];

export const TodoApp = () => {
  const [stodos, dispatch] = useReducer(todoReducer, initailState);
  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  );
};
