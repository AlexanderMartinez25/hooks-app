import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/components/TodoItem";

describe("Pruebas en <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "QLED 65''",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  // en cada prueba se resetea la función (la deja limpia)
  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrar el Todo Pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("debe de mostrar el TODO  completado", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("span debe de llamar el ToggleTodo cuando se hace click", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    // que se haya llamado con un argumento en especifico
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("button debe de llamar el deleteTodo", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);
    // que se haya llamado con un argumento en especifico
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
