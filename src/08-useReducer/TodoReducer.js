export const todoReducer = (initailState = [], action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("action.type = ABC no esta implementada");

    default:
      return initailState;
  }
};
