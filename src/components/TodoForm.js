import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";

import {
  addTodoItemAction,
  editTodoAction
} from "../redux/actions/actions-todo";

import "react-datepicker/dist/react-datepicker.css";

class TodoForm extends Component {
  state = {
    deadLine: "",
    todoInput: ""
  };

  componentDidMount() {
    if (this.props.id) {
      this.setState({
        todoInput: this.props.todoInput,
        deadLine: new Date(this.props.deadLine)
      });
    }
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
        if (this.props.id) {
          this.props.editTodo(this.props.id, todoInput, deadLine);
        } else {
          let isSuccess = this.props.addTodo(todoInput, deadLine);
          if (isSuccess) {
            this.setState({
              todoInput: "",
              deadLine: ""
            });
          }
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
      <div className="row align-items-center w-100">
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
                <button className="btn btn-outline-success" type="submit">
                  {this.props.id ? <i className="fa fa-save" /> : "Add"}
                </button>
                {this.props.id ? (
                  <button
                    onClick={this.props.cancelEdit}
                    className="btn btn-outline-danger ml-2"
                    type="button"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: (todoInput, deadLine) =>
    dispatch(addTodoItemAction(todoInput, deadLine)),
  editTodo: (id, todoInput, deadLine) =>
    dispatch(editTodoAction(id, todoInput, deadLine))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
