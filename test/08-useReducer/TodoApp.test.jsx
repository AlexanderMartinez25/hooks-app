import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/08-useReducer/hooks/useTodo";

jest.mock("../../src/08-useReducer/hooks/useTodo");

describe("Pruebas en <TodoApp />", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: "Todo #1", done: false },
      { id: 2, description: "Todo #2", done: false },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
  });

  test("debe de mostrar el componente correctamente", () => {
    render(<TodoApp />);

    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();

    // console.log(screen.getByRole("textbox").name);
  });
});
