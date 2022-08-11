import { todoReducer } from "../../src/08-useReducer/TodoReducer";

describe("Pruebas en todoReducer", () => {
  const initailState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("debe de regresar el estado inicial", () => {
    const newState = todoReducer(initailState, {});
    expect(newState).toBe(initailState);
  });

  test("debe de agregar un todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "Nuevo todo #2",
      },
    };

    const newState = todoReducer(initailState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("debe de eliminar un TODO", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };
    const newState = todoReducer(initailState, action);
    expect(newState).toEqual([]);
    expect(newState.length).toBe(0);
  });

  test("debe de realizar el TOGGLE del todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };

    // primer toggle
    const newState = todoReducer(initailState, action);
    // console.table(newState);
    expect(newState[0].done).toBe(true);

    // segundo toggle
    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBeFalsy();
  });
});
