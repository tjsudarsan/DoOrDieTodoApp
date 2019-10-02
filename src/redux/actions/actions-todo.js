import uuid from "uuid/v4";
import { db } from "../../firebase";

export const fetchList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: "LOAD_DATA_START"
      });
      const state = getState();
      let userId = state.auth.userDetails.uid;
      if (!userId) {
        alert("Auth Failed. Please Relogin");
        window.location.reload();
      }
      let snapshot = await db
        .collection("todo")
        .where("userId", "==", userId)
        .get();
      let list = [];
      snapshot.forEach(item => list.push(item.data()));
      list.sort(
        (a, b) =>
          new Date(a.deadLine).getTime() - new Date(b.deadLine).getTime()
      );
      dispatch({
        type: "LOAD_DATA_SUCCESS",
        payload: list
      });
    } catch (error) {
      alert("Something Went Wrong");
      console.log(error);
    }
  };
};

export const addTodoItemAction = (todoInput, deadLine) => {
  return async (dispatch, getState) => {
    try {
      let state = getState();
      let userId = state.auth.userDetails.uid;
      if (!userId) {
        alert("Auth Failed. Please Relogin");
        window.location.reload();
      }
      let newTodoItem = {
        id: uuid(),
        userId,
        todo: todoInput,
        isCompleted: false,
        completedAt: null,
        createdAt: new Date().toISOString(),
        deadLine
      };
      await db
        .collection("todo")
        .doc(newTodoItem.id)
        .set(newTodoItem);
      dispatch(fetchList());
    } catch (error) {
      alert("Something Went Wrong");
      console.log(error);
    }
  };
};

export const deleteTodoItemAction = id => {
  return async (dispatch, getState) => {
    try {
      await db
        .collection("todo")
        .doc(id)
        .delete();
      dispatch(fetchList());
      // const state = getState();
      // let listCopy = state.todo.list.slice();
      // let itemIndex = listCopy.findIndex(item => item.id === id);
      // listCopy.splice(itemIndex, 1);
      // dispatch({
      //   type: "DELETE_TODO_ITEM",
      //   payload: listCopy
      // });
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };
};

export const completeTodo = id => {
  return async (dispatch, getState) => {
    try {
      await db
        .collection("todo")
        .doc(id)
        .update({
          isCompleted: true,
          completedAt: new Date().toISOString()
        });
      dispatch(fetchList());
      // const state = getState();
      // let listCopy = state.todo.list.slice();
      // let itemIndex = listCopy.findIndex(item => item.id === id);
      // let itemDetails = listCopy[itemIndex];
      // itemDetails.isCompleted = true;
      // itemDetails.completedAt = new Date().toISOString();
      // listCopy[itemIndex] = itemDetails;
      // dispatch({
      //   type: "TODO_COMPLETED",
      //   payload: listCopy
      // });
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };
};

export const editTodoAction = (id, todoInput, deadLine) => {
  return async (dispatch, getState) => {
    try {
      await db
        .collection("todo")
        .doc(id)
        .update({
          todo: todoInput,
          deadLine
        });
      dispatch(fetchList());
      // const state = getState();
      // let listCopy = state.todo.list.slice();
      // let itemIndex = listCopy.findIndex(item => item.id === id);
      // let itemDetails = listCopy[itemIndex];
      // itemDetails.todo = todoInput;
      // itemDetails.deadLine = deadLine;
      // dispatch({
      //   type: "EDIT_TODO",
      //   payload: listCopy
      // });
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };
};
