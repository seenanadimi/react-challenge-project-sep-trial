const initialState = {
  bool: false,
};

const boolReducer = (state = initialState, action) => {
  if (action.type === "BOOLEAN") {
    return {
      bool: true,
    };
  } else {
    return {
      state,
    };
  }
};

export default boolReducer;
