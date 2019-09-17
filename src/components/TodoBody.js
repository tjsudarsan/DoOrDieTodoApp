import React from "react";
import uuid from "uuid/v4";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class TodoBody extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TodoForm />
        <TodoList />
      </React.Fragment>
    );
  }
}

export default TodoBody;
