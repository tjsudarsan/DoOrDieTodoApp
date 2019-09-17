import * as actionTypes from "../actionTypes";
import uuid from "uuid/v4";

export const addTodoItem = (todoInput, deadLine) => dispatch => {
  try {
    let todoItem = {
      id: uuid(),
      todo: todoInput,
      createdAt: new Date().toISOString(),
      isCompleted: false,
      completedAt: null,
      deadLine
    };
    dispatch({
      type: actionTypes.TODO_ADD_TODO_ITEM_SUCCESS,
      payload: todoItem
    });
  } catch (error) {
    dispatch({
      type: actionTypes.TODO_ADD_TODO_ITEM_FAILED,
      payload: { error }
    });
  }
};
