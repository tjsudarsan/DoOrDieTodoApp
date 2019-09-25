import React, { Component, Fragment } from "react";
import moment from "moment";
import { connect } from "react-redux";

import TodoForm from "./TodoForm";

import {
  deleteTodoItemAction,
  completeTodo
} from "../redux/actions/actions-todo";

class TodoItem extends Component {
  state = {
    isEdit: false
  };

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      isEdit: false
    });
  }

  handleEdit = () => {
    this.setState({
      isEdit: true
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="card-body todo-item-body">
          {this.state.isEdit ? (
            <TodoForm
              id={this.props.id}
              todoInput={this.props.todo}
              deadLine={this.props.deadLine}
              cancelEdit={() =>
                this.setState({
                  isEdit: false
                })
              }
            />
          ) : (
            <Fragment>
              <div className="checkbox-wrapper">
                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={this.props.id}
                    checked={this.props.isCompleted}
                    disabled={this.props.isCompleted}
                    onChange={() => {
                      if (window.confirm("Are you sure to mark as checked?")) {
                        this.props.completeTodo(this.props.id);
                      }
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={this.props.id}
                  ></label>
                </div>
              </div>
              <div className="todo-content">
                <span>
                  Created{" "}
                  {moment(this.props.createdAt).calendar({
                    format: "dd/mm/yyyy"
                  })}
                </span>
                <h3>{this.props.todo}</h3>
              </div>
              <div className="deadline">
                {this.props.isCompleted ? (
                  <Fragment>
                    <span>Completed on</span>
                    <h5>{moment(this.props.completedAt).calendar()}</h5>
                  </Fragment>
                ) : (
                  <Fragment>
                    <span>Deadline on</span>
                    <h5>{moment(this.props.deadLine).calendar()}</h5>
                  </Fragment>
                )}
              </div>
              {this.props.isCompleted ? null : (
                <div className="todo-actions">
                  <button
                    onClick={this.handleEdit}
                    className="btn btn-outline-primary"
                    type="button"
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  &nbsp; &nbsp;
                  <button
                    onClick={() => this.props.deleteTodo(this.props.id)}
                    className="btn btn-outline-danger"
                    type="button"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              )}
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodoItemAction(id)),
  completeTodo: id => dispatch(completeTodo(id))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
