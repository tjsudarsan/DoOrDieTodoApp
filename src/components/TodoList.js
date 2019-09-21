import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = props => {
  console.log(props);
  return props.list.map(item => <TodoItem key={item.id} {...item} />);
};

const mapStateToProps = ({ todo }) => ({
  list: todo.list,
  count: todo.count
});

export default connect(mapStateToProps)(TodoList);
