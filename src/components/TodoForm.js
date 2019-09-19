import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";

import { addTodoItemAction } from "../redux/actions/actions-todo";

import "react-datepicker/dist/react-datepicker.css";

class TodoForm extends Component {
  state = {
    deadLine: "",
    todoInput: ""
  };

  componentDidMount() {
    console.log(this.props);
  }

  todoInputChange = e => {
    if (e.target.value.length <= 100) {
      this.setState({
        todoInput: e.target.value
      });
    }
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
        let isSuccess = this.props.addTodoItem(todoInput, deadLine);
        if (isSuccess) {
          this.setState({
            todoInput: "",
            deadLine: ""
          });
        }
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
          <form id="todoForm" onSubmit={this.handleSubmit} autoComplete="off">
            <div className="form-row">
              <div className="col-12 col-md-8">
                <input
                  type="text"
                  name="todoInput"
                  className="form-control"
                  placeholder="Enter Tasks"
                  value={this.state.todoInput}
                  onChange={this.todoInputChange}
                />
              </div>
              <div className="col-12 col-md-3">
                <DatePicker
                  selected={this.state.deadLine}
                  onChange={this.handleDateChange}
                  todayButton="Today"
                  minDate={new Date()}
                  showTimeSelect
                  className="form-control"
                  placeholderText="Select deadline"
                  dateFormat="MMM dd, yyyy h:mm aa"
                  name="deadLine"
                />
              </div>
              <div className="col">
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

const mapDispatchToProps = dispatch => ({
  addTodoItem: (todoInput, deadLine) =>
    dispatch(addTodoItemAction(todoInput, deadLine))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
