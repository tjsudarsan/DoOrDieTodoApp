import React from "react";
import uuid from "uuid/v4";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class TodoBody extends React.Component {
  state = {
    todoList: []
  };

  addTodoItem = (todoText, deadLine) => {
    let listCopy = this.state.todoList.slice();
    listCopy.push({
      id: uuid(),
      todo: todoText,
      createdAt: new Date().toISOString(),
      isCompleted: false,
      completedAt: null,
      deadLine
    });
    this.setState({
      todoList: listCopy
    });
    document.getElementById("todoForm").reset();
  };

  render() {
    return (
      <React.Fragment>
        <TodoForm addTodoItem={this.addTodoItem} />
        <TodoList list={this.state.todoList} />
      </React.Fragment>
    );
  }
}

export default TodoBody;
