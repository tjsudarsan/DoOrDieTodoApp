import { createStore } from "redux";

import reducers from "./reducer/rootReducers";

const store = createStore(reducers);

export default store;
