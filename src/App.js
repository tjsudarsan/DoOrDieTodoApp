import React from "react";
import "./css/style.css";
import moment from "moment";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoBody from "./components/TodoBody";

moment.locale("en-gb");

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid my-3">
        <TodoBody />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
