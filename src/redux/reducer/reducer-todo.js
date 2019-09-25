const defaultState = {
  list: []
};

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case "ADD_TODO_ITEM":
      return {
        ...state,
        list: actions.payload
      };
    case "DELETE_TODO_ITEM":
      return {
        ...state,
        list: actions.payload
      };
    case "TODO_COMPLETED":
      return {
        ...state,
        list: actions.payload
      };
    case "EDIT_TODO":
      return {
        ...state,
        list: actions.payload
      };
    default:
      return state;
  }
};
