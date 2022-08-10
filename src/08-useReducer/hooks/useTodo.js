import { useEffect, useReducer } from "react";
import { todoReducer } from "../TodoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const useTodo = (initailState = []) => {
  // el "init" es para inicializarlo con algún valor
  const [todos, dispatch] = useReducer(todoReducer, initailState, init);

  // ejecutar cada vez que los "todos" cambien
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

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    todosCount: todos.length,
  };
};
