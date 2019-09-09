import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class TodoForm extends Component {
  state = {
    deadLine: "",
    todoInput: ""
  };

  todoInputChange = e => {
    this.setState({
      todoInput: e.target.value
    });
  };

  handleDateChange = date => {
    this.setState({
      deadLine: date
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todoInput) {
      if (this.state.deadLine) {
        let todoInput = this.state.todoInput;
        let deadLine = this.state.deadLine.toISOString();
        this.props.addTodoItem(todoInput, deadLine);
      } else {
        alert("Please select deadline");
      }
    } else {
      alert("Please enter task");
    }
  };

  render() {
    return (
      <div className="row align-items-center">
        <div className="col-12" style={{ textAlign: "center" }}>
          <form
            id="todoForm"
            onSubmit={this.handleSubmit}
            autoComplete="off"
            className="form-inline"
          >
            <div className="input-group mb-3 todoForm">
              <input
                type="text"
                name="todoInput"
                className="form-control"
                placeholder="Enter Tasks"
                value={this.state.todoInput}
                onChange={this.todoInputChange}
              />
              <DatePicker
                selected={this.state.deadLine}
                onChange={this.handleDateChange}
                className="form-control"
                placeholderText="Select date"
                dateFormat="MMM dd, yyyy"
                name="deadLine"
              />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoForm;
