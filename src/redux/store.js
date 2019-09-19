import { createStore, applyMiddleware } from "redux";

//Middlewares
import thunk from "redux-thunk";
import logger from "redux-logger";

//RootReducer
import reducers from "./reducer/rootReducers";

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(reducers, middlewares);

export default store;
