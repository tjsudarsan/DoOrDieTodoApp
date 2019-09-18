import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = props => {
  console.log(props);
  return props.list.map(item => <TodoItem key={item.id} {...item} />);
};

const mapStateToProps = state => {
  return {
    list: state.todo.list
  };
};

export default connect(mapStateToProps)(TodoList);
