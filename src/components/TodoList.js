import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  console.log(props.list);
  return props.list.map(item => <TodoItem key={item.id} {...item} />);
};

export default TodoList;
