import React from "react";
import TodoItem from "./TodoItem";

import { connect } from "react-redux";

const TodoList = props => {
  console.log(props);
  return props.todoList.map(item => <TodoItem key={item.id} {...item} />);
};

const mapStateToProps = state => ({
  todoList: state.todo.todoList
});

export default connect(mapStateToProps)(TodoList);
