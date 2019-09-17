import React, { Component, Fragment } from "react";
import moment from "moment";

class TodoItem extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="card-body todo-item-body">
          <div className="checkbox-wrapper">
            <div className="custom-control custom-checkbox my-1 mr-sm-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customControlInline"
                checked={this.props.isCompleted}
                disabled={this.props.isCompleted}
              />
              <label
                className="custom-control-label"
                htmlFor="customControlInline"
              ></label>
            </div>
          </div>
          <div className="todo-content">
            <span>
              Created{" "}
              {moment(this.props.createdAt).calendar({ format: "dd/mm/yyyy" })}
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
              <button className="btn btn-outline-primary" type="button">
                <i className="fas fa-pencil-alt"></i>
              </button>
              &nbsp; &nbsp;
              <button className="btn btn-outline-danger" type="button">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default TodoItem;
