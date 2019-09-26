import React from "react";
import "./css/style.css";
import moment from "moment";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="container-fluid my-3">
          <Routes />
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
