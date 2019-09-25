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

export const deleteTodoItemAction = id => {
  return (dispatch, getState) => {
    try {
      const state = getState();
      let listCopy = state.todo.list.slice();
      let itemIndex = listCopy.findIndex(item => item.id === id);
      listCopy.splice(itemIndex, 1);
      dispatch({
        type: "DELETE_TODO_ITEM",
        payload: listCopy
      });
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };
};

export const completeTodo = id => {
  return (dispatch, getState) => {
    try {
      const state = getState();
      let listCopy = state.todo.list.slice();
      let itemIndex = listCopy.findIndex(item => item.id === id);
      let itemDetails = listCopy[itemIndex];
      itemDetails.isCompleted = true;
      itemDetails.completedAt = new Date().toISOString();
      listCopy[itemIndex] = itemDetails;
      dispatch({
        type: "TODO_COMPLETED",
        payload: listCopy
      });
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };
};

export const editTodoAction = (id, todoInput, deadLine) => {
  return (dispatch, getState) => {
    try {
      const state = getState();
      let listCopy = state.todo.list.slice();
      let itemIndex = listCopy.findIndex(item => item.id === id);
      let itemDetails = listCopy[itemIndex];
      itemDetails.todo = todoInput;
      itemDetails.deadLine = deadLine;
      dispatch({
        type: "EDIT_TODO",
        payload: listCopy
      });
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };
};
