import React from "react";
import "./css/style.css";
import moment from "moment";
import { Provider } from "react-redux";
import store from "./redux/store";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoBody from "./components/TodoBody";

moment.locale("en-gb");

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="container-fluid my-3">
        <TodoBody />
      </div>
      <Footer />
    </Provider>
  );
};

export default App;
