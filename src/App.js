import React from "react";
import "./css/style.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoBody from "./components/TodoBody";

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
