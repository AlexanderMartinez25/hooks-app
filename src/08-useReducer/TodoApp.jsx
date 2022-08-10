import { useEffect, useReducer } from "react";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { todoReducer } from "./TodoReducer";

const initailState = [
  //   {
  //     id: new Date().getTime(),
  //     description: "Recolectar la piedra del Alma",
  //     done: false,
  //   },
];
const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const TodoApp = () => {
  // el "init" es para inicializarlo con algún valor
  const [todos, dispatch] = useReducer(todoReducer, initailState, init);

  // ejecutar cada vez que los todos cambien
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
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
