import React from "react";
import TodoForm from "./TodoForm";
import uuid from "uuid/v4";

class TodoBody extends React.Component {
  state = {
    todoList: []
  };

  addTodoItem = event => {
    event.preventDefault();
    let value = event.target.todoInput.value;
    if (value) {
      let listCopy = this.state.todoList.slice();
      listCopy.push({
        id: uuid(),
        todo: value,
        createdAt: new Date().toISOString(),
        isCompleted: false,
        completedAt: null
      });
      this.setState({
        todoList: listCopy
      });
      document.getElementById("todoForm").reset();
    }
  };

  render() {
    console.log(this.state.todoList);
    return (
      <React.Fragment>
        <TodoForm addTodoItem={this.addTodoItem} />
      </React.Fragment>
    );
  }
}

export default TodoBody;
