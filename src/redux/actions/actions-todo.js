import uuid from "uuid/v4";

export const addTodoItemAction = (todoInput, deadLine) => {
  return dispatch => {
    try {
        let payload = {
          id: uuid(),
          todo: todoInput,
          createdAt: new Date().toISOString(),
          isCompleted: false,
          completedAt: null,
          deadLine
        };
        dispatch({
          type: "ADD_TODO_ITEM",
          payload
        });
      } catch (error) {
        console.log(error);
      }
  };
};
