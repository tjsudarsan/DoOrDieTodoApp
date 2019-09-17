import * as actionTypes from "../actionTypes";
const defaultState = {
  todoList: []
};

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.TODO_ADD_TODO_ITEM_SUCCESS:
      let todoListCopy = state.todoList.slice();
      todoListCopy.push(actions.payload);
      return {
        ...state,
        todoList: todoListCopy
      };
    default:
      return state;
  }
};
