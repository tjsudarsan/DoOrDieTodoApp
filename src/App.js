import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import "./css/style.css";

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
