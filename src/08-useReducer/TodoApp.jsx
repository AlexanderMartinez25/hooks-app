import { useReducer } from "react";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { todoReducer } from "./TodoReducer";

const initailState = [
  {
    id: new Date().getTime(),
    desciption: "Recolectar la piedra del Alma",
    done: false,
  },
  {
    id: new Date().getTime() * 2,
    desciption: "Recolectar la piedra del Infinito",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initailState);

  const handleNewTodo = (todo) => {
    console.log({ todo });
  };

  return (
    <>
      <h1>
        TodoApp: 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          {/* TodoApp */}
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
