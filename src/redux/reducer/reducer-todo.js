const defaultState = {
  list: [],
  count: 5
};

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case "ADD_TODO_ITEM":
      return {
        ...state,
        list: actions.payload
      };
    default:
      return state;
  }
};
