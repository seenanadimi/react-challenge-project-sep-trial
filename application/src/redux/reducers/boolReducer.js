const boolReducer = (state = false, action) => {
  switch (action.type) {
    case "BOOLEAN":
      return {
        bool: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default boolReducer;
