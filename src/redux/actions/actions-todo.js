import uuid from "uuid/v4";

export const addTodoItemAction = (todoInput, deadLine) => {
  return (dispatch, getState) => {
    try {
      let state = getState();
      let newTodoItem = {
        id: uuid(),
        todo: todoInput,
        isCompleted: false,
        completedAt: null,
        createdAt: new Date().toISOString(),
        deadLine
      };
      let copy = state.todo.list.slice();
      copy.push(newTodoItem);
      dispatch({
        type: "ADD_TODO_ITEM",
        payload: copy
      });
    } catch (error) {
      alert("Something Went Wrong");
      console.log(error);
    }
  };
};
