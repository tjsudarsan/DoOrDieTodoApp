import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxLogger from "redux-logger";

import todoReducer from "./reducers/reducer-todo";
import authReducer from "./reducers/reducer-auth";

const reducers = combineReducers({
  auth: authReducer,
  todo: todoReducer
});

const middlewares = applyMiddleware(thunk, reduxLogger);

export default createStore(reducers, middlewares);
