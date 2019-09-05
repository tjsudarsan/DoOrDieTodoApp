import React from "react";

const TodoForm = props => {
  return (
    <div className="row align-items-center">
      <div className="col-12" style={{ textAlign: "center" }}>
        <form
          id="todoForm"
          onSubmit={props.addTodoItem}
          autoComplete="off"
          className="form-inline"
        >
          <div className="input-group mb-3 todoForm">
            <input
              type="text"
              name="todoInput"
              className="form-control"
              placeholder="Enter Tasks"
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
};

export default TodoForm;
