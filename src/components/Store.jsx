import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk/dist/redux-thunk.esm.js";

import rootReducer from "./Reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
