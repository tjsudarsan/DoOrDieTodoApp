import React from "react";
import TodoForm from "./TodoForm";

class TodoBody extends React.Component {
    state = {
        todoListData: []
    };

    addTodoItem = value => {
        console.log(value);
    };

    render() {
        return (
            <React.Fragment>
                <TodoForm />
            </React.Fragment>
        );
    }
}

export default TodoBody;
