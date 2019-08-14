import React, { Component } from 'react';
import uuid from 'uuid'

class TodoForm extends Component {
    state = {
        todoList: []
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var todoListCopy = this.state.todoList.slice()
        var framingTodoObject = {
            id: uuid(),
            todo: event.target.todoInput.value,
            isCompleted: false,
            createdAt: new Date().toISOString(),
            completedAt: null
        }
        todoListCopy.push(framingTodoObject)
        this.setState({
            todoList: todoListCopy
        })
    }

    render() {
        return (
            <div className="row align-items-center" >
                <div className="col-12" style={{ textAlign: 'center' }}>
                    <form onSubmit={this.handleSubmit} className="form-inline">
                        <div className="input-group mb-3 todoForm">
                            <input
                                type="text"
                                name="todoInput"
                                className="form-control"
                                placeholder="Enter Tasks"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-success" type="submit">Add</button>
                            </div>
                        </div>
                    </form>
                    {this.state.todoList.map((element, index) => {
                        return <p key={element.id}>{element.todo}</p>
                    })}
                </div>
            </div>
        )
    }
}

export default TodoForm