import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Dashboard = props => {
  return (
    <>
      <TodoForm />
      <hr />
      <TodoList />
    </>
  );
};

export default Dashboard;
