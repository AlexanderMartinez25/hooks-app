export const todoReducer = (initailState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initailState, action.payload];

    case "[TODO] Remove Todo":
      return initailState.filter((todo) => todo.id !== action.payload);

    default:
      return initailState;
  }
};
