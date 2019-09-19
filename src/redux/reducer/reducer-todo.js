const defaultState = {
  list: []
};

const todoReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case "ADD_TODO_ITEM":
        let listCopy = state.list.slice();
        listCopy.push(actions.payload);
        return {
          ...state,
          list: listCopy
        };
    default:
      return state;
  }
};

export default todoReducer;
