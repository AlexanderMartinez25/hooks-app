export const todoReducer = (initailState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initailState, action.payload];

    default:
      return initailState;
  }
};
